# Generated by Django 5.1.2 on 2024-11-02 03:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MetaAhorro',
            fields=[
                ('id_meta', models.AutoField(primary_key=True, serialize=False)),
                ('descripcion', models.TextField(blank=True, db_collation='utf8mb4_general_ci', null=True)),
                ('monto_ahorro', models.DecimalField(decimal_places=0, max_digits=10)),
                ('fecha_limite', models.DateField()),
            ],
            options={
                'db_table': 'meta_ahorro',
                'managed': False,
            },
        ),
    ]
