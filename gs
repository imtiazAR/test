# ============================================================
# GNOME SETUP
# ============================================================

echo
echo "=========================================="
echo " GNOME Setup"
echo "=========================================="

# Appearance
gsettings set org.gnome.desktop.interface color-scheme "'prefer-dark'"
gsettings set org.gnome.desktop.interface accent-color "'green'"
gsettings set org.gnome.desktop.interface gtk-theme "'Adwaita'"
gsettings set org.gnome.desktop.interface icon-theme "'Adwaita'"
gsettings set org.gnome.desktop.interface cursor-theme "'Adwaita'"
gsettings set org.gnome.desktop.interface cursor-size 24
gsettings set org.gnome.desktop.interface enable-animations true
gsettings set org.gnome.desktop.interface overlay-scrolling true
gsettings set org.gnome.desktop.interface gtk-enable-primary-paste false

# Clock
gsettings set org.gnome.desktop.interface clock-format "'24h'"
gsettings set org.gnome.desktop.interface clock-show-seconds true
gsettings set org.gnome.desktop.interface clock-show-weekday true
gsettings set org.gnome.desktop.interface show-battery-percentage true

# Input Sources
gsettings set org.gnome.desktop.input-sources sources \
    "[('xkb', 'us'), ('ibus', 'm17n:bn:khipro')]"

gsettings set org.gnome.desktop.input-sources mru-sources \
    "[('xkb', 'us'), ('ibus', 'm17n:bn:khipro')]"

gsettings set org.gnome.desktop.input-sources current 0

# Input Source Shortcuts
gsettings set org.gnome.desktop.wm.keybindings switch-input-source \
    "['<Alt>space']"

gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward \
    "['<Shift><Alt>space']"

# Window
gsettings set org.gnome.desktop.wm.preferences focus-mode "'click'"
gsettings set org.gnome.desktop.wm.preferences auto-raise true
gsettings set org.gnome.desktop.wm.preferences button-layout \
    "'appmenu:minimize,maximize,close'"

# Disable maximize/unmaximize shortcuts
gsettings set org.gnome.desktop.wm.keybindings maximize "@as []"
gsettings set org.gnome.desktop.wm.keybindings unmaximize "@as []"
gsettings set org.gnome.desktop.wm.keybindings activate-window-menu "@as []"

# Mutter
gsettings set org.gnome.mutter edge-tiling false
gsettings set org.gnome.mutter overlay-key "'Super'"

# Touchpad
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true
gsettings set org.gnome.desktop.peripherals.touchpad two-finger-scrolling-enabled true

# Keyboard
gsettings set org.gnome.desktop.peripherals.keyboard numlock-state false

# Night Light
gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled true
gsettings set org.gnome.settings-daemon.plugins.color night-light-schedule-automatic true
gsettings set org.gnome.settings-daemon.plugins.color night-light-schedule-from 5.0
gsettings set org.gnome.settings-daemon.plugins.color night-light-schedule-to 17.0
gsettings set org.gnome.settings-daemon.plugins.color night-light-temperature 5000

# Privacy
gsettings set org.gnome.desktop.privacy disable-camera true
gsettings set org.gnome.desktop.privacy report-technical-problems false

# Nautilus
gsettings set org.gnome.nautilus.preferences click-policy "'single'"
gsettings set org.gnome.nautilus.preferences default-folder-viewer "'list-view'"
gsettings set org.gnome.nautilus.preferences show-create-link true
gsettings set org.gnome.nautilus.preferences show-delete-permanently true
gsettings set org.gnome.nautilus.preferences date-time-format "'detailed'"

gsettings set org.gnome.nautilus.list-view use-tree-view true
gsettings set org.gnome.nautilus.icon-view default-zoom-level "'extra-large'"

# Calendar
gsettings set org.gnome.desktop.calendar show-weekdate true

# Sound
gsettings set org.gnome.desktop.sound allow-volume-above-100-percent true
gsettings set org.gnome.desktop.sound event-sounds true

# Break Reminders
gsettings set org.gnome.desktop.break-reminders.eyesight play-sound true
gsettings set org.gnome.desktop.break-reminders.movement duration-seconds 300
gsettings set org.gnome.desktop.break-reminders.movement interval-seconds 1800
gsettings set org.gnome.desktop.break-reminders.movement play-sound true

# Screen Time
gsettings set org.gnome.desktop.screen-time-limits daily-limit-seconds 28800

# Screenshot Shortcuts
gsettings set org.gnome.shell.keybindings screenshot "['Print']"
gsettings set org.gnome.shell.keybindings screenshot-window "['<Alt>s']"
gsettings set org.gnome.shell.keybindings show-screenshot-ui "['<Shift><Super>s']"
gsettings set org.gnome.shell.keybindings toggle-message-tray "@as []"

# ============================================================
# Custom Shortcut
# Super + Enter → Ptyxis
# ============================================================

CUSTOM_SCHEMA="org.gnome.settings-daemon.plugins.media-keys.custom-keybinding"
CUSTOM_PATH="/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/"

# Register custom shortcut path
gsettings set \
    org.gnome.settings-daemon.plugins.media-keys \
    custom-keybindings \
    "['$CUSTOM_PATH']"

# Configure relocatable schema instance
gsettings set \
    "$CUSTOM_SCHEMA" \
    "$CUSTOM_PATH" \
    name \
    "'Terminal'"

gsettings set \
    "$CUSTOM_SCHEMA" \
    "$CUSTOM_PATH" \
    command \
    "'ptyxis'"

gsettings set \
    "$CUSTOM_SCHEMA" \
    "$CUSTOM_PATH" \
    binding \
    "'<Super>Return'"

echo "GNOME setup complete."

echo
