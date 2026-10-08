from django.test import TestCase
from django.urls import reverse


class HomeViewTests(TestCase):
    def test_home_renders_with_base_layout(self):
        response = self.client.get(reverse('core:home'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'pages/home.html')
        self.assertTemplateUsed(response, 'base.html')


class HomeHeroTests(TestCase):
    def test_hero_has_single_page_heading(self):
        response = self.client.get(reverse('core:home'))

        self.assertTemplateUsed(response, 'sections/home/hero.html')
        self.assertContains(response, '<h1', count=1)
        self.assertContains(response, 'Master Tech Skills.')
        self.assertContains(response, 'Build Real')

    def test_rotating_word_has_a_stable_screen_reader_text(self):
        response = self.client.get(reverse('core:home'))

        self.assertContains(response, 'typewriter(["Confidence.", "Projects.", "Careers."]')
        self.assertContains(response, '<span class="sr-only">Confidence.</span>')
        self.assertContains(response, 'x-ref="word" aria-hidden="true"')

    def test_explore_courses_links_to_services(self):
        response = self.client.get(reverse('core:home'))

        self.assertTemplateUsed(response, 'components/link-button.html')
        self.assertContains(response, f'<a href="{reverse("core:services")}"')
        self.assertContains(response, 'Explore courses')

    def test_hero_image_is_described(self):
        response = self.client.get(reverse('core:home'))

        self.assertContains(response, 'hero-1672.webp')
        self.assertContains(response, 'alt="Three smiling students')


class PlaceholderPageTests(TestCase):
    def test_placeholder_pages_render(self):
        for name, template in [
            ('core:about', 'pages/about.html'),
            ('core:services', 'pages/services.html'),
            ('core:contact', 'pages/contact.html'),
        ]:
            with self.subTest(page=name):
                response = self.client.get(reverse(name))
                self.assertEqual(response.status_code, 200)
                self.assertTemplateUsed(response, template)


class NavbarTests(TestCase):
    def test_navbar_links_to_main_pages(self):
        response = self.client.get(reverse('core:home'))

        self.assertTemplateUsed(response, 'partials/navbar.html')
        for name in ['core:home', 'core:about', 'core:services', 'core:contact']:
            self.assertContains(response, f'href="{reverse(name)}"')

    def test_current_page_link_is_marked(self):
        response = self.client.get(reverse('core:services'))

        # Once in the desktop links, once in the mobile menu
        self.assertContains(response, 'aria-current="page">Services</a>', count=2)
        self.assertNotContains(response, 'aria-current="page">About</a>')

    def test_current_page_link_is_highlighted_before_alpine_starts(self):
        response = self.client.get(reverse('core:services'))

        self.assertContains(response, 'x-ref="services" class="focus-ring nav-link is-current"')
        self.assertContains(response, 'nav-link is-current"', count=1)

    def test_navbar_entrance_plays_only_on_home(self):
        home = self.client.get(reverse('core:home'))
        services = self.client.get(reverse('core:services'))

        self.assertContains(home, 'motion-safe:animate-fade-in')
        self.assertNotContains(services, 'motion-safe:animate-fade-in')

    def test_mobile_menu_toggle_controls_menu(self):
        response = self.client.get(reverse('core:services'))

        self.assertContains(response, 'aria-controls="mobile-menu" aria-expanded="false"')
        self.assertContains(response, 'id="mobile-menu"')
        self.assertContains(response, f'href="{reverse("core:services")}" class="focus-ring mobile-nav-link" aria-current="page"')
