from rest_framework.viewsets import ModelViewSet
from categoria.models import Categoria
from categoria.api.serializers import CategoriaSerializers
from categoria.api.permissions import IsAdminReadOnly


class  CategoriaApiViewSet(ModelViewSet):
    permission_classes=[IsAdminReadOnly]
    serializer_class= CategoriaSerializers
    queryset = Categoria.objects.all()
    