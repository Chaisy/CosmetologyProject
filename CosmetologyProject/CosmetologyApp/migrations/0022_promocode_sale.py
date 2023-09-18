# Generated by Django 4.1.9 on 2023-09-13 18:41

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CosmetologyApp', '0021_promocode'),
    ]

    operations = [
        migrations.AddField(
            model_name='promocode',
            name='sale',
            field=models.IntegerField(default='0', validators=[django.core.validators.MinValueValidator(10), django.core.validators.MaxValueValidator(100)]),
        ),
    ]
