from rest_framework import serializers
from meta_ahorro.models import MetaAhorro

class MetaAhorroSerializers(serializers.ModelSerializer):
    class Meta:
        model = MetaAhorro
        fields = ['id_meta', 'descripcion','monto_ahorro','fecha_limite','id_user']