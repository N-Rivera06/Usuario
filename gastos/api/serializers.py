from rest_framework import serializers
from gastos.models import Gasto
from Users.models import User
from categoria.models import Categoria

class GastosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Gasto
        fields=['id_gastos','descripcion','monto','fecha','id_user','id_categoria']   
   