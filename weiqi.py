# -*- coding: utf-8 -*-
"""
Weiqi Render Plugin for Pelican
==============================
"""

import os
import sys

from pelican import signals, generators


def register():
    """Plugin registration"""
    signals.initialized.connect(pelican_init)
    signals.all_generators_finalized.connect(process_rst_and_summaries)
