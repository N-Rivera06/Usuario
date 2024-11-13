from django.contrib import admin
from gastos.models import Gasto


# Register your models here.

@admin.register(Gasto)

class gastosAdmin (admin.ModelAdmin):
    list_display=['id_gastos', 'descripcion','monto','fecha','id_user','id_categoria']