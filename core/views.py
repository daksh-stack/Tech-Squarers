from django.views.generic import DetailView, TemplateView

from .models import FAQ, Course, Testimonial


class HomeView(TemplateView):
    """Homepage. Sections are added one at a time as the design is built out."""

    template_name = 'pages/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # A 3×2 preview; the full list lives on the Services page
        context['courses'] = Course.objects.all()[:6]
        context['testimonials'] = Testimonial.objects.all()
        context['faqs'] = FAQ.objects.all()
        return context


class AboutView(TemplateView):
    """About page. Sections are added once the design inspo is in."""

    template_name = 'pages/about.html'


class ServicesView(TemplateView):
    """Services page (the courses TechSquarers runs). Sections are added once the design inspo is in."""

    template_name = 'pages/services.html'


class CourseDetailView(DetailView):
    """One course at /services/<slug>/. Sections are added once the design inspo is in."""

    model = Course
    template_name = 'pages/course-detail.html'


class ContactView(TemplateView):
    """Contact page. Sections are added once the design inspo is in."""

    template_name = 'pages/contact.html'
