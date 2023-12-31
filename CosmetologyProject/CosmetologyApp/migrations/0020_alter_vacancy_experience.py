# Generated by Django 4.1.9 on 2023-09-13 16:38

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CosmetologyApp', '0019_alter_vacancy_salary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacancy',
            name='experience',
            field=models.IntegerField(default='0', help_text='enter experience(years)', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(60)]),
        ),
    ]
