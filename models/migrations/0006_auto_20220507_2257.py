# Generated by Django 3.1.13 on 2022-05-07 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('models', '0005_auto_20220501_0448'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='model',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
