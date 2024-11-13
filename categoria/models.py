from django.db import models

# Create your models here.


class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre_categoria = models.CharField(max_length=100, db_collation='utf8mb4_spanish_ci')
    descripcion = models.TextField(db_collation='utf8mb4_spanish_ci	', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'categoria'

        def __str__(self):
         return self.nombre_categoria