# Generated by Django 4.0 on 2021-12-16 14:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Combo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('cost', models.IntegerField()),
                ('time', models.DateTimeField(verbose_name='Expires on')),
                ('image', models.ImageField(default='combo', upload_to='combo')),
                ('numberperson', models.IntegerField()),
                ('percent', models.IntegerField(default=10)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('menu', models.CharField(choices=[('Appetizer', 'Appetizer'), ('Main', 'Main'), ('Dessert', 'Dessert'), ('Vegetarian', 'Vegetarian'), ('Children', 'Children')], default='Sang', max_length=10)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Pizza',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('size', models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L')], default='S', max_length=1)),
                ('cost', models.IntegerField()),
                ('image', models.ImageField(default='defaultpizza.webp', upload_to='pizza')),
                ('description', models.CharField(blank=True, max_length=200)),
                ('menu', models.CharField(choices=[('Appetizer', 'Appetizer'), ('Main', 'Main'), ('Dessert', 'Dessert'), ('Vegetarian', 'Vegetarian'), ('Children', 'Children')], default='Appetizer', max_length=10)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='SideDishes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('cost', models.IntegerField()),
                ('image', models.ImageField(default='defaultdishes.jpg', upload_to='sidedishes')),
                ('description', models.CharField(blank=True, max_length=200)),
                ('menu', models.CharField(choices=[('Appetizer', 'Appetizer'), ('Main', 'Main'), ('Dessert', 'Dessert'), ('Vegetarian', 'Vegetarian'), ('Children', 'Children')], default='Sang', max_length=10)),
                ('type', models.CharField(choices=[('Noodle', 'Noodle'), ('Drink', 'Drink'), ('GaBBQ', 'GaBBQ'), ('Frenchfries', 'Franchfries'), ('SideDishes', 'Sidedishes')], default='SideDishes', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Topping',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cost', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(default='topping.jpg', upload_to='topping')),
                ('description', models.CharField(blank=True, max_length=200)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='ToppingAmount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(choices=[(1, 'Regular'), (2, 'Double'), (3, 'Triple')], default=1)),
                ('pizza', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='topping_amounts', to='project.pizza')),
                ('topping', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='topping_amount', to='project.topping')),
            ],
        ),
        migrations.CreateModel(
            name='ScoreSide',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5)),
                ('side', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sidescore', to='project.sidedishes')),
            ],
        ),
        migrations.CreateModel(
            name='ScorePizza',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5)),
                ('pizza', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pizzascore', to='project.pizza')),
            ],
        ),
        migrations.CreateModel(
            name='ScoreCombo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5)),
                ('combo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comboscore', to='project.combo')),
            ],
        ),
        migrations.AddField(
            model_name='pizza',
            name='toppings',
            field=models.ManyToManyField(related_name='pizzas', through='project.ToppingAmount', to='project.Topping'),
        ),
        migrations.CreateModel(
            name='ComboAmount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L')], default='S', max_length=1)),
                ('amountPizza', models.IntegerField(default=1)),
                ('amount', models.IntegerField(default=1)),
                ('combo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='combo', to='project.combo')),
                ('dishes', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='dishes', to='project.sidedishes')),
                ('pizza', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='pizza', to='project.pizza')),
            ],
            options={
                'ordering': ('combo', 'pizza', 'dishes'),
            },
        ),
        migrations.AddField(
            model_name='combo',
            name='pizzas',
            field=models.ManyToManyField(related_name='pizzas', to='project.Pizza'),
        ),
        migrations.AddField(
            model_name='combo',
            name='sides',
            field=models.ManyToManyField(related_name='sides', to='project.SideDishes'),
        ),
    ]
