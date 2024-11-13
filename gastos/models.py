from django.db import models
from Users.models import User
from categoria.models import Categoria

# Create your models here.
class Gasto(models.Model):
    id_gastos = models.AutoField(primary_key=True)
    descripcion = models.TextField(db_collation='utf8mb4_general_ci', blank=True, null=True)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField()
    id_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, db_column='id_user')
    id_categoria = models.ForeignKey(Categoria, models.DO_NOTHING, db_column='id_categoria')
     
    class Meta:
        managed = False
        db_table = 'gastos'
