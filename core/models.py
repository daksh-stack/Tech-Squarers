from urllib.parse import quote
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from django.db import models
from django.urls import reverse


class SiteSettings(models.Model):
    """Editable-in-admin settings that aren't page content, kept as a single row (see save/admin)."""

    whatsapp_number = models.CharField(
        'WhatsApp number', max_length=20, blank=True,
        validators=[RegexValidator(r'^\d{7,15}$', 'Digits only, in full international form, e.g. 2348012345678 — no +, spaces or leading 0.')],
        help_text='Full international number, digits only (country code first, no +). The Enrol buttons open a WhatsApp chat with this number. Left blank, those buttons are hidden.',
    )
    # Footer social links; each icon shows only once its address is filled in
    linkedin_url = models.URLField('LinkedIn', blank=True)
    instagram_url = models.URLField('Instagram', blank=True)
    x_url = models.URLField('X (Twitter)', blank=True)
    facebook_url = models.URLField('Facebook', blank=True)
    youtube_url = models.URLField('YouTube', blank=True)

    class Meta:
        verbose_name = 'site settings'
        verbose_name_plural = 'site settings'

    def __str__(self):
        return 'Site settings'

    def save(self, *args, **kwargs):
        self.pk = 1  # One row only; every save updates the same settings
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj

    @property
    def whatsapp_chat_url(self):
        """A wa.me link for general questions (the footer CTA), or '' if no number is set."""
        if not self.whatsapp_number:
            return ''
        message = "Hi, I have a question about TechSquarers' courses."
        return f'https://wa.me/{self.whatsapp_number}?text={quote(message, safe="")}'

    @property
    def social_links(self):
        """The filled-in social links, in footer order, as (icon name, label, url)."""
        links = [
            ('linkedin', 'LinkedIn', self.linkedin_url),
            ('instagram', 'Instagram', self.instagram_url),
            ('x', 'X', self.x_url),
            ('facebook', 'Facebook', self.facebook_url),
            ('youtube', 'YouTube', self.youtube_url),
        ]
        return [link for link in links if link[2]]


class Course(models.Model):
    """A course TechSquarers runs, edited in /admin and listed on the Home and Services pages."""

    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, help_text='Used in the course page address, e.g. /services/ui-ux/.')
    photo = models.ImageField(upload_to='courses/', blank=True, help_text='WebP, landscape, at least 800px wide.')
    photo_alt = models.CharField(
        'photo description', max_length=150, blank=True,
        help_text='What the photo shows, for screen readers, e.g. "Laptop on a desk beside a notebook".',
    )
    duration = models.CharField(max_length=50, blank=True, help_text='e.g. "12 weeks". Hidden on the site when empty.')
    order = models.PositiveIntegerField(default=0, help_text='Lower numbers show first. The first six appear on the Home page.')

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('core:course_detail', args=[self.slug])

    def clean(self):
        if self.photo and not self.photo_alt:
            raise ValidationError({'photo_alt': 'Describe the photo so screen-reader users know what it shows.'})

    def enrol_url(self, whatsapp_number):
        """A wa.me link opening WhatsApp with a message naming this course, or '' if no number is set."""
        if not whatsapp_number:
            return ''
        message = f"Hi, I'd like to enrol in the {self.name} course."
        return f'https://wa.me/{whatsapp_number}?text={quote(message, safe="")}'


class Testimonial(models.Model):
    """A quote from a learner or client, edited in /admin and shown in the Home testimonials reel."""

    quote = models.TextField(max_length=300, help_text='Keep it short, one or two sentences, so it fits beside the photo.')
    name = models.CharField(max_length=100, help_text='Who said it, shown under the quote.')
    role = models.CharField(max_length=100, blank=True, help_text='Shown under the name, e.g. "UI/UX graduate". Hidden on the site when empty.')
    photo = models.ImageField(
        upload_to='testimonials/',
        help_text='WebP, square, at least 300px wide. The face should sit near the centre. Decorative: the name under the quote says who it is.',
    )
    order = models.PositiveIntegerField(default=0, help_text='Lower numbers show first.')

    class Meta:
        ordering = ['order', 'pk']

    def __str__(self):
        return self.name


class FAQ(models.Model):
    """A frequently asked question, edited in /admin and shown in the Home FAQ section."""

    question = models.CharField(max_length=200)
    answer = models.TextField(help_text='Plain text. Press Enter for a new line.')
    order = models.PositiveIntegerField(default=0, help_text='Lower numbers show first. The first question starts open.')

    class Meta:
        ordering = ['order', 'pk']
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'

    def __str__(self):
        return self.question
