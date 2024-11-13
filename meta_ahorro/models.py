from django.db import models
from Users.models import User


# Create your models here.
class MetaAhorro(models.Model):
    id_meta = models.AutoField(primary_key=True)
    descripcion = models.TextField(db_collation='utf8mb4_general_ci', blank=True, null=True)
    monto_ahorro = models.DecimalField(max_digits=10, decimal_places=0)
    fecha_limite = models.DateField()
    id_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, db_column='id_user')

    class Meta:
        managed = False
        db_table = 'meta_ahorro'
    
    