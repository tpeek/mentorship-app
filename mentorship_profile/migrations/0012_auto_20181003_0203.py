# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-10-03 02:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mentorship_profile', '0011_auto_20180926_0205'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mentor',
            old_name='areas_of_interest',
            new_name='areas_of_guidance',
        ),
    ]
