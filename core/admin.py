from django.contrib import admin

from .models import FAQ, Course, SiteSettings, Testimonial


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['whatsapp_number']}),
        ('Social links', {
            'fields': ['linkedin_url', 'instagram_url', 'x_url', 'facebook_url', 'youtube_url'],
            'description': 'Full addresses, e.g. https://www.instagram.com/techsquarers. Each icon appears in the footer once its address is filled in.',
        }),
    ]

    def has_add_permission(self, request):
        # A single settings row; edit it rather than adding more
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'duration', 'order']
    list_editable = ['order']
    prepopulated_fields = {'slug': ['name']}


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'order']
    list_editable = ['order']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'order']
    list_editable = ['order']
