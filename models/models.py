from django.db import models

class Model(models.Model):
    name = models.CharField(max_length=50, blank=False)
    code = models.CharField(max_length=50, blank=False)
    sizes = models.CharField(max_length=100, null=True, blank=True)
    cloth_width = models.CharField(max_length=100, null=True, blank=True)
    cloth = models.CharField(max_length=100, null=True, blank=True)
    dublerin_cons = models.CharField(max_length=100, null=True, blank=True)
    flizelin_cons = models.CharField(max_length=100, null=True, blank=True)
    colors = models.CharField(max_length=100, null=True, blank=True)
    cloth_cons_fact = models.CharField(max_length=100, null=True, blank=True)
    cloth_cons_comm = models.CharField(max_length=100, null=True, blank=True)
    desc = models.TextField(max_length=2000,null=True, blank=True)
    furniture = models.TextField(max_length=2000, null=True, blank=True)
    proccesing = models.TextField(max_length=2000, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
   
    
    class Meta:
        verbose_name = 'Модель'
        verbose_name_plural = 'Модели'
        ordering = ['-date_added']

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self):
        return f'/ModelDetail/{self.id}'



class Image(models.Model):
    model = models.ForeignKey(Model, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='photo')

    class Meta:
        verbose_name = 'Фото модели'
        verbose_name_plural = 'Фото модели'

    def __str__(self):
        return f'{self.model}: фото {self.id}'

    def return_path(self):
        return f'{self.image}'


