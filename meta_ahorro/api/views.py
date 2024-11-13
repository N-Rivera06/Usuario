from rest_framework.viewsets import ModelViewSet
from meta_ahorro.models import MetaAhorro
from meta_ahorro.api.serializers import MetaAhorroSerializers
from meta_ahorro.api.permissions import IsAdminReadOnly


class MetaAhorroApiViewSet(ModelViewSet):
    permission_classes=[IsAdminReadOnly]
    serializer_class= MetaAhorroSerializers
    queryset = MetaAhorro.objects.all()
