from django.shortcuts import render, get_object_or_404
from .models import Producto

# Create your views here.

def index(request):
    return render(request, 'index.html')

def producto(request, categoria):
    productos = Producto.objects.filter(categoria=categoria)
    return render(request, 'producto.html', {'productos': productos})

def preguntas(request):
    return render(request, "preguntas.html")

def detalle_producto(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    return render(request, 'producto_detail.html', {'producto': producto})

def listar_productos(request):
    productos = Producto.objects.all()
    context = {'productos': productos}
    return render(request, 'producto.html', context)

