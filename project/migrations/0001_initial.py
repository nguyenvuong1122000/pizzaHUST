# Generated by Django 3.2.7 on 2021-11-10 03:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SideDishes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('cost', models.IntegerField()),
                ('image', models.ImageField(default='defaultdishes.jpg', upload_to='sidedishes')),
            ],
        ),
        migrations.CreateModel(
            name='Topping',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cost', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Pizza',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('size', models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L')], default='S', max_length=1)),
                ('cost', models.IntegerField()),
                ('image', models.ImageField(default='defaultpizza.webp', upload_to='pizza')),
                ('toppings', models.ManyToManyField(to='project.Topping')),
            ],
        ),
        migrations.CreateModel(
            name='Combo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('cost', models.IntegerField()),
                ('time', models.DateTimeField(verbose_name='Expires on')),
                ('image', models.ImageField(upload_to='')),
                ('numberperson', models.IntegerField()),
                ('dishes', models.ManyToManyField(to='project.SideDishes')),
                ('pizzas', models.ManyToManyField(to='project.Pizza')),
            ],
        ),
    ]
