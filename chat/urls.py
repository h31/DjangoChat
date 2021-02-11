from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import MessageViewSet, MessageView

app_name = "chat"

router = DefaultRouter()
router.register(r'messagesViewSet', MessageViewSet)
urlpatterns = router.urls + [
    path('messages/', MessageView.as_view()),
]
