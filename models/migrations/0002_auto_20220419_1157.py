# Generated by Django 3.2.9 on 2022-04-19 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('models', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='model',
            name='cloth',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='cloth_width',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='desc',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='dublerin_cons',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='flizelin_cons',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='furniture',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='proccesing',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='sizes',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
