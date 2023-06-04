# Generated by Django 4.1.9 on 2023-06-03 19:37

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CosmetologyApp', '0005_remove_client_doctor_remove_client_service_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shedule',
            name='room',
            field=models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(20), django.core.validators.MinValueValidator(1)]),
            preserve_default=False,
        ),
    ]
