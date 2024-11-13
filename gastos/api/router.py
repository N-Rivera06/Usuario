from rest_framework.routers import    DefaultRouter
from gastos.api.views    import GastoApiViewSet

router_gastos= DefaultRouter()
router_gastos.register(prefix='Gastos', basename='Gastos', viewset= GastoApiViewSet)


