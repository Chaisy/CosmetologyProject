# Generated by Django 4.1.9 on 2023-09-13 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CosmetologyApp', '0024_promocode_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='photo',
            field=models.URLField(blank=True, default='', null=True),
        ),
    ]