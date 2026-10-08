from .models import Course, SiteSettings


def site(request):
    """Settings and courses the footer needs on every page (templates/partials/footer.html)."""
    return {
        'site': SiteSettings.load(),
        'footer_courses': Course.objects.all(),
    }
