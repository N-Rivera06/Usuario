
from django.contrib import admin
from categoria.models import Categoria

# Register your models here.

@admin.register(Categoria)

class CategoriaAdmin (admin.ModelAdmin):
    list_display=['nombre_categoria', 'descripcion']