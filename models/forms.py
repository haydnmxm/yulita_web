from django import forms
from .models import Model, Image

class ModelForm(forms.ModelForm):

    class Meta:
        model = Model
        fields = '__all__'
