from rest_framework.routers import    DefaultRouter
from categoria.api.views    import CategoriaApiViewSet

router_categoria= DefaultRouter()
router_categoria.register(prefix='Categoria', basename='Categoria', viewset= CategoriaApiViewSet)


