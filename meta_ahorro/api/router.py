from rest_framework.routers import DefaultRouter
from meta_ahorro.api.views import MetaAhorroApiViewSet

router_Meta_Ahorro = DefaultRouter()
router_Meta_Ahorro.register(prefix='Meta_Ahorro', basename='Meta_Ahorro', viewset=MetaAhorroApiViewSet)
