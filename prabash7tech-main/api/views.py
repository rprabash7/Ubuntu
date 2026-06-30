from django.views.generic import TemplateView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings


class ReactAppView(TemplateView):
    template_name = 'index.html'


@api_view(['GET'])
def display_info(request):
    image_filename = 'prabash7tech.jpg'
    
    data = {
        'name': 'Prabash',
        'message': 'Learn Programming in Simple Telugu',
        'image_url': f'{settings.MEDIA_URL}images/{image_filename}'
    }
    return Response(data)
