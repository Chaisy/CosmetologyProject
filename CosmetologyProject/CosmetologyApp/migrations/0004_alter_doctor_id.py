# Generated by Django 4.1.9 on 2023-06-02 13:27

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('CosmetologyApp', '0003_alter_client_options_alter_room_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False),
        ),
    ]