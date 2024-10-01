from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(null=False, max_length=100)
    descripcion = models.CharField(null=False, max_length=200)
    categoria = models.CharField(null=False, max_length=200)
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=0.00)
    
    def __str__(self):
        return self.nombre