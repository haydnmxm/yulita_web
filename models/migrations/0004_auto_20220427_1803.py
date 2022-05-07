# Generated by Django 3.2.9 on 2022-04-27 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('models', '0003_model_field1'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='model',
            options={'ordering': ['-date_added'], 'verbose_name': 'Модель', 'verbose_name_plural': 'Модели'},
        ),
        migrations.RemoveField(
            model_name='model',
            name='field1',
        ),
        migrations.AddField(
            model_name='model',
            name='cloth_cons_comm',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='model',
            name='cloth_cons_fact',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='model',
            name='colors',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='photo'),
        ),
        migrations.AlterField(
            model_name='model',
            name='cloth_width',
            field=models.SmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='code',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='model',
            name='desc',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='dublerin_cons',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='flizelin_cons',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='furniture',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='model',
            name='name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='model',
            name='proccesing',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
    ]