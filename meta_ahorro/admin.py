from django.contrib import admin
from meta_ahorro.models import MetaAhorro


# Register your models here.

@admin.register(MetaAhorro)

class MetaAhorroAdmin (admin.ModelAdmin):
    list_display=['id_meta', 'descripcion','monto_ahorro','fecha_limite','id_user']
