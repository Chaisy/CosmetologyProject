# Generated by Django 4.1.9 on 2023-09-13 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CosmetologyApp', '0023_alter_promocode_expiration_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='promocode',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
