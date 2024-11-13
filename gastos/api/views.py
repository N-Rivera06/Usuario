from rest_framework.viewsets import ModelViewSet
from gastos.models import Gasto
from gastos.api.serializers import GastosSerializers
from gastos.api.permissions import IsAdminReadOnly


class GastoApiViewSet(ModelViewSet):
    permission_classes=[IsAdminReadOnly]
    serializer_class= GastosSerializers
    queryset = Gasto.objects.all()
