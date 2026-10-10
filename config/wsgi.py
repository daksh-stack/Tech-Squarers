"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os
from django.core import management

# Run migrations on cold start to ensure the SQLite DB has the required tables.
# This is safe because Vercel's /tmp is ephemeral; migrations will execute each startup.
if os.getenv('RUN_MIGRATIONS', 'true').lower() == 'true':
    try:
        management.call_command('migrate', '--noinput')
    except Exception:  # pragma: no cover
        pass

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
