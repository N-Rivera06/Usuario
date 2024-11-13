from rest_framework import serializers
from categoria.models import Categoria

class CategoriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields=['id_categoria','nombre_categoria','descripcion']
        