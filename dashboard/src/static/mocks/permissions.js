const permissions = [
    {
        "id": "android.permission.ACCEPT_HANDOVER",
        "title": "android.permission.ACCEPT_HANDOVER",
        "description": "Allows a calling app to continue a call which was started in another app. An example is a video calling app that wants to continue a voice call on the user's mobile network.When the handover of a call from one app to another takes place, there are two devices which are involved in the handover; the initiating and receiving devices. The initiating device is where the request to handover the call was started, and the receiving device is where the handover request is confirmed by the other party.This permission protects access to the TelecomManager.acceptHandover(Uri, int, PhoneAccountHandle) which the receiving side of the handover uses to accept a handover.",
        "minAPI": "28",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ACCESS_BACKGROUND_LOCATION",
        "title": "android.permission.ACCESS_BACKGROUND_LOCATION",
        "description": "Allows an app to access location in the background. If you're requesting this permission, you must also request either ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION. Requesting this permission by itself doesn't give you location access.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "29",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ACCESS_CHECKIN_PROPERTIES",
        "title": "android.permission.ACCESS_CHECKIN_PROPERTIES",
        "description": "Allows read/write access to the \"properties\" table in the checkin database, to change values that get uploaded.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.ACCESS_COARSE_LOCATION",
        "title": "android.permission.ACCESS_COARSE_LOCATION",
        "description": "Allows an app to access approximate location. Alternatively, you might want ACCESS_FINE_LOCATION.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ACCESS_FINE_LOCATION",
        "title": "android.permission.ACCESS_FINE_LOCATION",
        "description": "Allows an app to access precise location. Alternatively, you might want ACCESS_COARSE_LOCATION.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",
        "title": "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",
        "description": "Allows an application to access extra location provider commands.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.ACCESS_MEDIA_LOCATION",
        "title": "android.permission.ACCESS_MEDIA_LOCATION",
        "description": "Allows an application to access any geographic locations persisted in the user's shared collection.",
        "minAPI": "29",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ACCESS_NETWORK_STATE",
        "title": "android.permission.ACCESS_NETWORK_STATE",
        "description": "Allows applications to access information about networks.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.ACCESS_NOTIFICATION_POLICY",
        "title": "android.permission.ACCESS_NOTIFICATION_POLICY",
        "description": "Marker permission for applications that wish to access notification policy. This permission is not supported on managed profiles.",
        "minAPI": "23",
        "risk": "normal"
    },
    {
        "id": "android.permission.ACCESS_WIFI_STATE",
        "title": "android.permission.ACCESS_WIFI_STATE",
        "description": "Allows applications to access information about Wi-Fi networks.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.ACCOUNT_MANAGER",
        "title": "android.permission.ACCOUNT_MANAGER",
        "description": "Allows applications to call into AccountAuthenticators.",
        "minAPI": "5",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.ACTIVITY_RECOGNITION",
        "title": "android.permission.ACTIVITY_RECOGNITION",
        "description": "Allows an application to recognize physical activity.",
        "minAPI": "29",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ADD_VOICEMAIL",
        "title": "android.permission.ADD_VOICEMAIL",
        "description": "Allows an application to add voicemails into the system.",
        "minAPI": "14",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.ANSWER_PHONE_CALLS",
        "title": "android.permission.ANSWER_PHONE_CALLS",
        "description": "Allows the app to answer an incoming phone call.",
        "minAPI": "26",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.BATTERY_STATS",
        "title": "android.permission.BATTERY_STATS",
        "description": "Allows an application to collect battery statistics",
        "minAPI": "1",
        "risk": "signature|privileged|development"
    },
    {
        "id": "android.permission.BIND_ACCESSIBILITY_SERVICE",
        "title": "android.permission.BIND_ACCESSIBILITY_SERVICE",
        "description": "Must be required by an AccessibilityService, to ensure that only the system can bind to it.",
        "minAPI": "16",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_APPWIDGET",
        "title": "android.permission.BIND_APPWIDGET",
        "description": "Allows an application to tell the AppWidget service which application can access AppWidget's data. The normal user flow is that a user picks an AppWidget to go into a particular host, thereby giving that host application access to the private data from the AppWidget app. An application that has this permission should honor that contract.",
        "minAPI": "3",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.BIND_AUTOFILL_SERVICE",
        "title": "android.permission.BIND_AUTOFILL_SERVICE",
        "description": "Must be required by a AutofillService, to ensure that only the system can bind to it.",
        "minAPI": "26",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_CALL_REDIRECTION_SERVICE",
        "title": "android.permission.BIND_CALL_REDIRECTION_SERVICE",
        "description": "Must be required by a CallRedirectionService, to ensure that only the system can bind to it.",
        "minAPI": "29",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE",
        "title": "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE",
        "description": "A subclass of CarrierMessagingClientService must be protected with this permission.",
        "minAPI": "29",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_CARRIER_MESSAGING_SERVICE",
        "title": "android.permission.BIND_CARRIER_MESSAGING_SERVICE",
        "description": "This constant was deprecated in API level 23.\nUse BIND_CARRIER_SERVICES instead",
        "minAPI": "22",
        "risk": ""
    },
    {
        "id": "android.permission.BIND_CARRIER_SERVICES",
        "title": "android.permission.BIND_CARRIER_SERVICES",
        "description": "The system process that is allowed to bind to services in carrier apps will have this permission. Carrier apps should use this permission to protect their services that only the system is allowed to bind to.",
        "minAPI": "23",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_CHOOSER_TARGET_SERVICE",
        "title": "android.permission.BIND_CHOOSER_TARGET_SERVICE",
        "description": "This constant was deprecated in API level R.\nFor publishing direct share targets, please follow the instructions in https://developer.android.com/training/sharing/receive.html#providing-direct-share-targets instead.Must be required by a ChooserTargetService, to ensure that only the system can bind to it.",
        "minAPI": "23",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_CONDITION_PROVIDER_SERVICE",
        "title": "android.permission.BIND_CONDITION_PROVIDER_SERVICE",
        "description": "Must be required by a ConditionProviderService, to ensure that only the system can bind to it.",
        "minAPI": "24",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_CONTROLS",
        "title": "android.permission.BIND_CONTROLS",
        "description": "Allows SystemUI to request third party controls.Should only be requested by the System and required by ControlsProviderService declarations.",
        "minAPI": "R",
        "risk": ""
    },
    {
        "id": "android.permission.BIND_DEVICE_ADMIN",
        "title": "android.permission.BIND_DEVICE_ADMIN",
        "description": "Must be required by device administration receiver, to ensure that only the system can interact with it.",
        "minAPI": "8",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_DREAM_SERVICE",
        "title": "android.permission.BIND_DREAM_SERVICE",
        "description": "Must be required by an DreamService, to ensure that only the system can bind to it.",
        "minAPI": "21",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_INCALL_SERVICE",
        "title": "android.permission.BIND_INCALL_SERVICE",
        "description": "Must be required by a InCallService, to ensure that only the system can bind to it.",
        "minAPI": "23",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_INPUT_METHOD",
        "title": "android.permission.BIND_INPUT_METHOD",
        "description": "Must be required by an InputMethodService, to ensure that only the system can bind to it.",
        "minAPI": "3",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_MIDI_DEVICE_SERVICE",
        "title": "android.permission.BIND_MIDI_DEVICE_SERVICE",
        "description": "Must be required by an MidiDeviceService, to ensure that only the system can bind to it.",
        "minAPI": "23",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_NFC_SERVICE",
        "title": "android.permission.BIND_NFC_SERVICE",
        "description": "Must be required by a HostApduService or OffHostApduService to ensure that only the system can bind to it.",
        "minAPI": "19",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",
        "title": "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",
        "description": "Must be required by an NotificationListenerService, to ensure that only the system can bind to it.",
        "minAPI": "18",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_PRINT_SERVICE",
        "title": "android.permission.BIND_PRINT_SERVICE",
        "description": "Must be required by a PrintService, to ensure that only the system can bind to it.",
        "minAPI": "19",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE",
        "title": "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE",
        "description": "Must be required by a QuickAccessWalletService to ensure that only the system can bind to it.",
        "minAPI": "R",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_QUICK_SETTINGS_TILE",
        "title": "android.permission.BIND_QUICK_SETTINGS_TILE",
        "description": "Allows an application to bind to third party quick settings tiles.Should only be requested by the System, should be required by TileService declarations.",
        "minAPI": "24",
        "risk": ""
    },
    {
        "id": "android.permission.BIND_REMOTEVIEWS",
        "title": "android.permission.BIND_REMOTEVIEWS",
        "description": "Must be required by a RemoteViewsService, to ensure that only the system can bind to it.",
        "minAPI": "11",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_SCREENING_SERVICE",
        "title": "android.permission.BIND_SCREENING_SERVICE",
        "description": "Must be required by a CallScreeningService, to ensure that only the system can bind to it.",
        "minAPI": "24",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_TELECOM_CONNECTION_SERVICE",
        "title": "android.permission.BIND_TELECOM_CONNECTION_SERVICE",
        "description": "Must be required by a ConnectionService, to ensure that only the system can bind to it.",
        "minAPI": "23",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_TEXT_SERVICE",
        "title": "android.permission.BIND_TEXT_SERVICE",
        "description": "Must be required by a TextService (e.g. SpellCheckerService) to ensure that only the system can bind to it.",
        "minAPI": "14",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_TV_INPUT",
        "title": "android.permission.BIND_TV_INPUT",
        "description": "Must be required by a TvInputService to ensure that only the system can bind to it.",
        "minAPI": "21",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",
        "title": "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",
        "description": "Must be required by a link VisualVoicemailService to ensure that only the system can bind to it.",
        "minAPI": "26",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BIND_VOICE_INTERACTION",
        "title": "android.permission.BIND_VOICE_INTERACTION",
        "description": "Must be required by a VoiceInteractionService, to ensure that only the system can bind to it.",
        "minAPI": "21",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_VPN_SERVICE",
        "title": "android.permission.BIND_VPN_SERVICE",
        "description": "Must be required by a VpnService, to ensure that only the system can bind to it.",
        "minAPI": "14",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_VR_LISTENER_SERVICE",
        "title": "android.permission.BIND_VR_LISTENER_SERVICE",
        "description": "Must be required by an VrListenerService, to ensure that only the system can bind to it.",
        "minAPI": "24",
        "risk": "signature"
    },
    {
        "id": "android.permission.BIND_WALLPAPER",
        "title": "android.permission.BIND_WALLPAPER",
        "description": "Must be required by a WallpaperService, to ensure that only the system can bind to it.",
        "minAPI": "8",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.BLUETOOTH",
        "title": "android.permission.BLUETOOTH",
        "description": "Allows applications to connect to paired bluetooth devices.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.BLUETOOTH_ADMIN",
        "title": "android.permission.BLUETOOTH_ADMIN",
        "description": "Allows applications to discover and pair bluetooth devices.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.BLUETOOTH_PRIVILEGED",
        "title": "android.permission.BLUETOOTH_PRIVILEGED",
        "description": "Allows applications to pair bluetooth devices without user interaction, and to allow or disallow phonebook access or message access.",
        "minAPI": "19",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.BODY_SENSORS",
        "title": "android.permission.BODY_SENSORS",
        "description": "Allows an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate.",
        "minAPI": "20",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.BROADCAST_PACKAGE_REMOVED",
        "title": "android.permission.BROADCAST_PACKAGE_REMOVED",
        "description": "Allows an application to broadcast a notification that an application package has been removed.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.BROADCAST_SMS",
        "title": "android.permission.BROADCAST_SMS",
        "description": "Allows an application to broadcast an SMS receipt notification.",
        "minAPI": "2",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.BROADCAST_STICKY",
        "title": "android.permission.BROADCAST_STICKY",
        "description": "Allows an application to broadcast sticky intents. These are broadcasts whose data is held by the system after being finished, so that clients can quickly retrieve that data without having to wait for the next broadcast.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.BROADCAST_WAP_PUSH",
        "title": "android.permission.BROADCAST_WAP_PUSH",
        "description": "Allows an application to broadcast a WAP PUSH receipt notification.",
        "minAPI": "2",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.CALL_COMPANION_APP",
        "title": "android.permission.CALL_COMPANION_APP",
        "description": "Allows an app which implements the InCallService API to be eligible to be enabled as a calling companion app. This means that the Telecom framework will bind to the app's InCallService implementation when there are calls active. The app can use the InCallService API to view information about calls on the system and control these calls.",
        "minAPI": "29",
        "risk": "normal"
    },
    {
        "id": "android.permission.CALL_PHONE",
        "title": "android.permission.CALL_PHONE",
        "description": "Allows an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.CALL_PRIVILEGED",
        "title": "android.permission.CALL_PRIVILEGED",
        "description": "Allows an application to call any phone number, including emergency numbers, without going through the Dialer user interface for the user to confirm the call being placed.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.CAMERA",
        "title": "android.permission.CAMERA",
        "description": "Required to be able to access the camera device.This will automatically enforce the uses-feature manifest element for all camera features. If you do not require all camera features or can properly operate if a camera is not available, then you must modify your manifest as appropriate in order to install on devices that don't support all camera features.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.CAPTURE_AUDIO_OUTPUT",
        "title": "android.permission.CAPTURE_AUDIO_OUTPUT",
        "description": "Allows an application to capture audio output. Use the CAPTURE_MEDIA_OUTPUT permission if only the USAGE_UNKNOWN), USAGE_MEDIA) or USAGE_GAME) usages are intended to be captured.",
        "minAPI": "19",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.CHANGE_COMPONENT_ENABLED_STATE",
        "title": "android.permission.CHANGE_COMPONENT_ENABLED_STATE",
        "description": "Allows an application to change whether an application component (other than its own) is enabled or not.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.CHANGE_CONFIGURATION",
        "title": "android.permission.CHANGE_CONFIGURATION",
        "description": "Allows an application to modify the current configuration, such as locale.",
        "minAPI": "1",
        "risk": "signature|privileged|development"
    },
    {
        "id": "android.permission.CHANGE_NETWORK_STATE",
        "title": "android.permission.CHANGE_NETWORK_STATE",
        "description": "Allows applications to change network connectivity state.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.CHANGE_WIFI_MULTICAST_STATE",
        "title": "android.permission.CHANGE_WIFI_MULTICAST_STATE",
        "description": "Allows applications to enter Wi-Fi Multicast mode.",
        "minAPI": "4",
        "risk": "normal"
    },
    {
        "id": "android.permission.CHANGE_WIFI_STATE",
        "title": "android.permission.CHANGE_WIFI_STATE",
        "description": "Allows applications to change Wi-Fi connectivity state.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.CLEAR_APP_CACHE",
        "title": "android.permission.CLEAR_APP_CACHE",
        "description": "Allows an application to clear the caches of all installed applications on the device.",
        "minAPI": "1",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.CONTROL_LOCATION_UPDATES",
        "title": "android.permission.CONTROL_LOCATION_UPDATES",
        "description": "Allows enabling/disabling location update notifications from the radio.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.DELETE_CACHE_FILES",
        "title": "android.permission.DELETE_CACHE_FILES",
        "description": "Old permission for deleting an app's cache files, no longer used, but signals for us to quietly ignore calls instead of throwing an exception.",
        "minAPI": "1",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.DELETE_PACKAGES",
        "title": "android.permission.DELETE_PACKAGES",
        "description": "Allows an application to delete packages.Starting in Build.VERSION_CODES.N, user confirmation is requested when the application deleting the package is not the same application that installed the package.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.DIAGNOSTIC",
        "title": "android.permission.DIAGNOSTIC",
        "description": "Allows applications to RW to diagnostic resources.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.DISABLE_KEYGUARD",
        "title": "android.permission.DISABLE_KEYGUARD",
        "description": "Allows applications to disable the keyguard if it is not secure.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.DUMP",
        "title": "android.permission.DUMP",
        "description": "Allows an application to retrieve state dump information from system services.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.EXPAND_STATUS_BAR",
        "title": "android.permission.EXPAND_STATUS_BAR",
        "description": "Allows an application to expand or collapse the status bar.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.FACTORY_TEST",
        "title": "android.permission.FACTORY_TEST",
        "description": "Run as a manufacturer test application, running as the root user. Only available when the device is running in manufacturer test mode.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.FOREGROUND_SERVICE",
        "title": "android.permission.FOREGROUND_SERVICE",
        "description": "Allows a regular application to use Service.startForeground.",
        "minAPI": "28",
        "risk": "normal"
    },
    {
        "id": "android.permission.GET_ACCOUNTS",
        "title": "android.permission.GET_ACCOUNTS",
        "description": "Allows access to the list of accounts in the Accounts Service.Note: Beginning with Android 6.0 (API level 23), if an app shares the signature of the authenticator that manages an account, it does not need \"GET_ACCOUNTS\" permission to read information about that account. On Android 5.1 and lower, all apps need \"GET_ACCOUNTS\" permission to read information about any account.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.GET_ACCOUNTS_PRIVILEGED",
        "title": "android.permission.GET_ACCOUNTS_PRIVILEGED",
        "description": "Allows access to the list of accounts in the Accounts Service.",
        "minAPI": "23",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.GET_PACKAGE_SIZE",
        "title": "android.permission.GET_PACKAGE_SIZE",
        "description": "Allows an application to find out the space used by any package.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.GET_TASKS",
        "title": "android.permission.GET_TASKS",
        "description": "This constant was deprecated in API level 21.\nNo longer enforced.",
        "minAPI": "1",
        "risk": ""
    },
    {
        "id": "android.permission.GLOBAL_SEARCH",
        "title": "android.permission.GLOBAL_SEARCH",
        "description": "This permission can be used on content providers to allow the global search system to access their data. Typically it used when the provider has some permissions protecting it (which global search would not be expected to hold), and added as a read-only permission to the path in the provider where global search queries are performed. This permission can not be held by regular applications; it is used by applications to protect themselves from everyone else besides global search.",
        "minAPI": "4",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.INSTALL_LOCATION_PROVIDER",
        "title": "android.permission.INSTALL_LOCATION_PROVIDER",
        "description": "Allows an application to install a location provider into the Location Manager.",
        "minAPI": "4",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.INSTALL_PACKAGES",
        "title": "android.permission.INSTALL_PACKAGES",
        "description": "Allows an application to install packages.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.INSTALL_SHORTCUT",
        "title": "android.permission.INSTALL_SHORTCUT",
        "description": "Allows an application to install a shortcut in Launcher.In Android O (API level 26) and higher, the INSTALL_SHORTCUT broadcast no longer has any effect on your app because it's a private, implicit broadcast. Instead, you should create an app shortcut by using the requestPinShortcut() method from the ShortcutManager class.",
        "minAPI": "19",
        "risk": "normal"
    },
    {
        "id": "android.permission.INSTANT_APP_FOREGROUND_SERVICE",
        "title": "android.permission.INSTANT_APP_FOREGROUND_SERVICE",
        "description": "Allows an instant app to create foreground services.",
        "minAPI": "26",
        "risk": "signature|development|instant|appop"
    },
    {
        "id": "android.permission.INTERACT_ACROSS_PROFILES",
        "title": "android.permission.INTERACT_ACROSS_PROFILES",
        "description": "Allows interaction across profiles in the same profile group.",
        "minAPI": "R",
        "risk": ""
    },
    {
        "id": "android.permission.INTERNET",
        "title": "android.permission.INTERNET",
        "description": "Allows applications to open network sockets.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.KILL_BACKGROUND_PROCESSES",
        "title": "android.permission.KILL_BACKGROUND_PROCESSES",
        "description": "Allows an application to call ActivityManager.killBackgroundProcesses(String).",
        "minAPI": "8",
        "risk": "normal"
    },
    {
        "id": "android.permission.LOADER_USAGE_STATS",
        "title": "android.permission.LOADER_USAGE_STATS",
        "description": "Allows a data loader to read a package's access logs. The access logs contain the set of pages referenced over time.Declaring the permission implies intention to use the API and the user of the device can grant permission through the Settings application.",
        "minAPI": "R",
        "risk": "signature|privileged|appop"
    },
    {
        "id": "android.permission.LOCATION_HARDWARE",
        "title": "android.permission.LOCATION_HARDWARE",
        "description": "Allows an application to use location features in hardware, such as the geofencing api.",
        "minAPI": "18",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.MANAGE_DOCUMENTS",
        "title": "android.permission.MANAGE_DOCUMENTS",
        "description": "Allows an application to manage access to documents, usually as part of a document picker.This permission should only be requested by the platform document management app. This permission cannot be granted to third-party apps.",
        "minAPI": "19",
        "risk": ""
    },
    {
        "id": "android.permission.MANAGE_EXTERNAL_STORAGE",
        "title": "android.permission.MANAGE_EXTERNAL_STORAGE",
        "description": "Allows an application a broad access to external storage in scoped storage. Intended to be used by few apps that need to manage files on behalf of the users.",
        "minAPI": "R",
        "risk": "signature|appop|preinstalled"
    },
    {
        "id": "android.permission.MANAGE_OWN_CALLS",
        "title": "android.permission.MANAGE_OWN_CALLS",
        "description": "Allows a calling application which manages it own calls through the self-managed ConnectionService APIs. See PhoneAccount.CAPABILITY_SELF_MANAGED for more information on the self-managed ConnectionService APIs.",
        "minAPI": "26",
        "risk": "normal"
    },
    {
        "id": "android.permission.MASTER_CLEAR",
        "title": "android.permission.MASTER_CLEAR",
        "description": "",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.MEDIA_CONTENT_CONTROL",
        "title": "android.permission.MEDIA_CONTENT_CONTROL",
        "description": "Allows an application to know what content is playing and control its playback.",
        "minAPI": "19",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.MODIFY_AUDIO_SETTINGS",
        "title": "android.permission.MODIFY_AUDIO_SETTINGS",
        "description": "Allows an application to modify global audio settings.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.MODIFY_PHONE_STATE",
        "title": "android.permission.MODIFY_PHONE_STATE",
        "description": "Allows modification of the telephony state - power on, mmi, etc. Does not include placing calls.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.MOUNT_FORMAT_FILESYSTEMS",
        "title": "android.permission.MOUNT_FORMAT_FILESYSTEMS",
        "description": "Allows formatting file systems for removable storage.",
        "minAPI": "3",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",
        "title": "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",
        "description": "Allows mounting and unmounting file systems for removable storage.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.NFC",
        "title": "android.permission.NFC",
        "description": "Allows applications to perform I/O operations over NFC.",
        "minAPI": "9",
        "risk": "normal"
    },
    {
        "id": "android.permission.NFC_PREFERRED_PAYMENT_INFO",
        "title": "android.permission.NFC_PREFERRED_PAYMENT_INFO",
        "description": "Allows applications to receive NFC preferred payment service information.",
        "minAPI": "R",
        "risk": "normal"
    },
    {
        "id": "android.permission.NFC_TRANSACTION_EVENT",
        "title": "android.permission.NFC_TRANSACTION_EVENT",
        "description": "Allows applications to receive NFC transaction events.",
        "minAPI": "28",
        "risk": "normal"
    },
    {
        "id": "android.permission.PACKAGE_USAGE_STATS",
        "title": "android.permission.PACKAGE_USAGE_STATS",
        "description": "Allows an application to collect component usage statisticsDeclaring the permission implies intention to use the API and the user of the device can grant permission through the Settings application.",
        "minAPI": "23",
        "risk": "signature|privileged|development|appop|retailDemo"
    },
    {
        "id": "android.permission.PERSISTENT_ACTIVITY",
        "title": "android.permission.PERSISTENT_ACTIVITY",
        "description": "This constant was deprecated in API level 15.\nThis functionality will be removed in the future; please do not use. Allow an application to make its activities persistent.",
        "minAPI": "1",
        "risk": ""
    },
    {
        "id": "android.permission.PROCESS_OUTGOING_CALLS",
        "title": "android.permission.PROCESS_OUTGOING_CALLS",
        "description": "This constant was deprecated in API level 29.\nApplications should use CallRedirectionService instead of the Intent.ACTION_NEW_OUTGOING_CALL broadcast.Allows an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.QUERY_ALL_PACKAGES",
        "title": "android.permission.QUERY_ALL_PACKAGES",
        "description": "Allows query of any normal app on the device, regardless of manifest declarations.",
        "minAPI": "R",
        "risk": ""
    },
    {
        "id": "android.permission.READ_CALENDAR",
        "title": "android.permission.READ_CALENDAR",
        "description": "Allows an application to read the user's calendar data.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_CALL_LOG",
        "title": "android.permission.READ_CALL_LOG",
        "description": "Allows an application to read the user's call log.Note: If your app uses the READ_CONTACTS permission and both your minSdkVersion and targetSdkVersion values are set to 15 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 16 or higher.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "16",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_CONTACTS",
        "title": "android.permission.READ_CONTACTS",
        "description": "Allows an application to read the user's contacts data.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_EXTERNAL_STORAGE",
        "title": "android.permission.READ_EXTERNAL_STORAGE",
        "description": "Allows an application to read from external storage.Any app that declares the WRITE_EXTERNAL_STORAGE permission is implicitly granted this permission.This permission is enforced starting in API level 19. Before API level 19, this permission is not enforced and all apps still have access to read from external storage. You can test your app with the permission enforced by enabling Protect USB storage under Developer options in the Settings app on a device running Android 4.1 or higher.Also starting in API level 19, this permission is not required to read/write files in your application-specific directories returned by Context.getExternalFilesDir(String) and Context.getExternalCacheDir().Note: If both your minSdkVersion and targetSdkVersion values are set to 3 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 4 or higher.This is a soft restricted permission which cannot be held by an app it its full form until the installer on record whitelists the permission. Specifically, if the permission is whitelisted the holder app can access external storage and the visual and aural media collections while if the permission is not whitelisted the holder app can only access to the visual and aural medial collections. Also the permission is immutably restricted meaning that the whitelist state can be specified only at install time and cannot change until the app is installed. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "16",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_INPUT_STATE",
        "title": "android.permission.READ_INPUT_STATE",
        "description": "This constant was deprecated in API level 16.\nThe API that used this permission has been removed.Allows an application to retrieve the current state of keys and switches.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.READ_LOGS",
        "title": "android.permission.READ_LOGS",
        "description": "Allows an application to read the low-level system log files.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.READ_PHONE_NUMBERS",
        "title": "android.permission.READ_PHONE_NUMBERS",
        "description": "Allows read access to the device's phone number(s). This is a subset of the capabilities granted by READ_PHONE_STATE but is exposed to instant applications.",
        "minAPI": "26",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_PHONE_STATE",
        "title": "android.permission.READ_PHONE_STATE",
        "description": "Allows read only access to phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.Note: If both your minSdkVersion and targetSdkVersion values are set to 3 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 4 or higher.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_PRECISE_PHONE_STATE",
        "title": "android.permission.READ_PRECISE_PHONE_STATE",
        "description": "Allows read only access to precise phone state. Allows reading of detailed information about phone state for special-use applications such as dialers, carrier applications, or ims applications.",
        "minAPI": "R",
        "risk": ""
    },
    {
        "id": "android.permission.READ_SMS",
        "title": "android.permission.READ_SMS",
        "description": "Allows an application to read SMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.READ_SYNC_SETTINGS",
        "title": "android.permission.READ_SYNC_SETTINGS",
        "description": "Allows applications to read the sync settings.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.READ_SYNC_STATS",
        "title": "android.permission.READ_SYNC_STATS",
        "description": "Allows applications to read the sync stats.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.READ_VOICEMAIL",
        "title": "android.permission.READ_VOICEMAIL",
        "description": "Allows an application to read voicemails in the system.",
        "minAPI": "21",
        "risk": "signature|privileged"
    },
    {
        "id": "android.permission.REBOOT",
        "title": "android.permission.REBOOT",
        "description": "Required to be able to reboot the device.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.RECEIVE_BOOT_COMPLETED",
        "title": "android.permission.RECEIVE_BOOT_COMPLETED",
        "description": "Allows an application to receive the Intent.ACTION_BOOT_COMPLETED that is broadcast after the system finishes booting. If you don't request this permission, you will not receive the broadcast at that time. Though holding this permission does not have any security implications, it can have a negative impact on the user experience by increasing the amount of time it takes the system to start and allowing applications to have themselves running without the user being aware of them. As such, you must explicitly declare your use of this facility to make that visible to the user.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.RECEIVE_MMS",
        "title": "android.permission.RECEIVE_MMS",
        "description": "Allows an application to monitor incoming MMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.RECEIVE_SMS",
        "title": "android.permission.RECEIVE_SMS",
        "description": "Allows an application to receive SMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.RECEIVE_WAP_PUSH",
        "title": "android.permission.RECEIVE_WAP_PUSH",
        "description": "Allows an application to receive WAP push messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.RECORD_AUDIO",
        "title": "android.permission.RECORD_AUDIO",
        "description": "Allows an application to record audio.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.REORDER_TASKS",
        "title": "android.permission.REORDER_TASKS",
        "description": "Allows an application to change the Z-order of tasks.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND",
        "title": "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND",
        "description": "Allows a companion app to run in the background.",
        "minAPI": "26",
        "risk": "normal"
    },
    {
        "id": "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND",
        "title": "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND",
        "description": "Allows a companion app to use data in the background.",
        "minAPI": "26",
        "risk": "normal"
    },
    {
        "id": "android.permission.REQUEST_DELETE_PACKAGES",
        "title": "android.permission.REQUEST_DELETE_PACKAGES",
        "description": "Allows an application to request deleting packages. Apps targeting APIs Build.VERSION_CODES.P or greater must hold this permission in order to use Intent.ACTION_UNINSTALL_PACKAGE or PackageInstaller.uninstall(VersionedPackage, IntentSender).",
        "minAPI": "26",
        "risk": "normal"
    },
    {
        "id": "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        "title": "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        "description": "Permission an application must hold in order to use Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS.",
        "minAPI": "23",
        "risk": "normal"
    },
    {
        "id": "android.permission.REQUEST_INSTALL_PACKAGES",
        "title": "android.permission.REQUEST_INSTALL_PACKAGES",
        "description": "Allows an application to request installing packages. Apps targeting APIs greater than 25 must hold this permission in order to use Intent.ACTION_INSTALL_PACKAGE.",
        "minAPI": "23",
        "risk": "signature"
    },
    {
        "id": "android.permission.REQUEST_PASSWORD_COMPLEXITY",
        "title": "android.permission.REQUEST_PASSWORD_COMPLEXITY",
        "description": "Allows an application to request the screen lock complexity and prompt users to update the screen lock to a certain complexity level.",
        "minAPI": "29",
        "risk": "normal"
    },
    {
        "id": "android.permission.RESTART_PACKAGES",
        "title": "android.permission.RESTART_PACKAGES",
        "description": "This constant was deprecated in API level 15.\nThe ActivityManager.restartPackage(String) API is no longer supported.",
        "minAPI": "1",
        "risk": ""
    },
    {
        "id": "android.permission.SEND_RESPOND_VIA_MESSAGE",
        "title": "android.permission.SEND_RESPOND_VIA_MESSAGE",
        "description": "Allows an application (Phone) to send a request to other applications to handle the respond-via-message action during incoming calls.",
        "minAPI": "18",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SEND_SMS",
        "title": "android.permission.SEND_SMS",
        "description": "Allows an application to send SMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.SET_ALARM",
        "title": "android.permission.SET_ALARM",
        "description": "Allows an application to broadcast an Intent to set an alarm for the user.",
        "minAPI": "9",
        "risk": "normal"
    },
    {
        "id": "android.permission.SET_ALWAYS_FINISH",
        "title": "android.permission.SET_ALWAYS_FINISH",
        "description": "Allows an application to control whether activities are immediately finished when put in the background.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SET_ANIMATION_SCALE",
        "title": "android.permission.SET_ANIMATION_SCALE",
        "description": "Modify the global animation scaling factor.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SET_DEBUG_APP",
        "title": "android.permission.SET_DEBUG_APP",
        "description": "Configure an application for debugging.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SET_PREFERRED_APPLICATIONS",
        "title": "android.permission.SET_PREFERRED_APPLICATIONS",
        "description": "This constant was deprecated in API level 15.\nNo longer useful, see PackageManager.addPackageToPreferred(String) for details.",
        "minAPI": "1",
        "risk": ""
    },
    {
        "id": "android.permission.SET_PROCESS_LIMIT",
        "title": "android.permission.SET_PROCESS_LIMIT",
        "description": "Allows an application to set the maximum number of (not needed) application processes that can be running.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SET_TIME",
        "title": "android.permission.SET_TIME",
        "description": "Allows applications to set the system time directly.",
        "minAPI": "8",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SET_TIME_ZONE",
        "title": "android.permission.SET_TIME_ZONE",
        "description": "Allows applications to set the system time zone directly.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SET_WALLPAPER",
        "title": "android.permission.SET_WALLPAPER",
        "description": "Allows applications to set the wallpaper.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.SET_WALLPAPER_HINTS",
        "title": "android.permission.SET_WALLPAPER_HINTS",
        "description": "Allows applications to set the wallpaper hints.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.SIGNAL_PERSISTENT_PROCESSES",
        "title": "android.permission.SIGNAL_PERSISTENT_PROCESSES",
        "description": "Allow an application to request that a signal be sent to all persistent processes.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SMS_FINANCIAL_TRANSACTIONS",
        "title": "android.permission.SMS_FINANCIAL_TRANSACTIONS",
        "description": "Allows financial apps to read filtered sms messages. Protection level: signature|appop",
        "minAPI": "29",
        "risk": ""
    },
    {
        "id": "android.permission.START_VIEW_PERMISSION_USAGE",
        "title": "android.permission.START_VIEW_PERMISSION_USAGE",
        "description": "Allows the holder to start the permission usage screen for an app.",
        "minAPI": "29",
        "risk": "signature|installer"
    },
    {
        "id": "android.permission.STATUS_BAR",
        "title": "android.permission.STATUS_BAR",
        "description": "Allows an application to open, close, or disable the status bar and its icons.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.SYSTEM_ALERT_WINDOW",
        "title": "android.permission.SYSTEM_ALERT_WINDOW",
        "description": "Allows an app to create windows using the type WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY, shown on top of all other apps. Very few apps should use this permission; these windows are intended for system-level interaction with the user.Note: If the app targets API level 23 or higher, the app user must explicitly grant this permission to the app through a permission management screen. The app requests the user's approval by sending an intent with action Settings.ACTION_MANAGE_OVERLAY_PERMISSION. The app can check whether it has this authorization by calling Settings.canDrawOverlays().",
        "minAPI": "1",
        "risk": "signature|preinstalled|appop|pre23|development"
    },
    {
        "id": "android.permission.TRANSMIT_IR",
        "title": "android.permission.TRANSMIT_IR",
        "description": "Allows using the device's IR transmitter, if available.",
        "minAPI": "19",
        "risk": "normal"
    },
    {
        "id": "android.permission.UNINSTALL_SHORTCUT",
        "title": "android.permission.UNINSTALL_SHORTCUT",
        "description": "Don't use this permission in your app.\nThis permission is no longer supported.",
        "minAPI": "19",
        "risk": ""
    },
    {
        "id": "android.permission.UPDATE_DEVICE_STATS",
        "title": "android.permission.UPDATE_DEVICE_STATS",
        "description": "Allows an application to update device statistics.",
        "minAPI": "3",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.USE_BIOMETRIC",
        "title": "android.permission.USE_BIOMETRIC",
        "description": "Allows an app to use device supported biometric modalities.",
        "minAPI": "28",
        "risk": "normal"
    },
    {
        "id": "android.permission.USE_FINGERPRINT",
        "title": "android.permission.USE_FINGERPRINT",
        "description": "This constant was deprecated in API level 28.\nApplications should request USE_BIOMETRIC insteadAllows an app to use fingerprint hardware.",
        "minAPI": "23",
        "risk": "normal"
    },
    {
        "id": "android.permission.USE_FULL_SCREEN_INTENT",
        "title": "android.permission.USE_FULL_SCREEN_INTENT",
        "description": "Required for apps targeting Build.VERSION_CODES.Q that want to use notification full screen intents.",
        "minAPI": "29",
        "risk": "normal"
    },
    {
        "id": "android.permission.USE_SIP",
        "title": "android.permission.USE_SIP",
        "description": "Allows an application to use SIP service.",
        "minAPI": "9",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.VIBRATE",
        "title": "android.permission.VIBRATE",
        "description": "Allows access to the vibrator.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.WAKE_LOCK",
        "title": "android.permission.WAKE_LOCK",
        "description": "Allows using PowerManager WakeLocks to keep processor from sleeping or screen from dimming.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.WRITE_APN_SETTINGS",
        "title": "android.permission.WRITE_APN_SETTINGS",
        "description": "Allows applications to write the apn settings and read sensitive fields of an existing apn settings like user and password.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.WRITE_CALENDAR",
        "title": "android.permission.WRITE_CALENDAR",
        "description": "Allows an application to write the user's calendar data.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.WRITE_CALL_LOG",
        "title": "android.permission.WRITE_CALL_LOG",
        "description": "Allows an application to write (but not read) the user's call log data.Note: If your app uses the WRITE_CONTACTS permission and both your minSdkVersion and targetSdkVersion values are set to 15 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 16 or higher.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set).",
        "minAPI": "16",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.WRITE_CONTACTS",
        "title": "android.permission.WRITE_CONTACTS",
        "description": "Allows an application to write the user's contacts data.",
        "minAPI": "1",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.WRITE_EXTERNAL_STORAGE",
        "title": "android.permission.WRITE_EXTERNAL_STORAGE",
        "description": "Allows an application to write to external storage.Note: If both your minSdkVersion and targetSdkVersion values are set to 3 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 4 or higher.Starting in API level 19, this permission is not required to read/write files in your application-specific directories returned by Context.getExternalFilesDir(String) and Context.getExternalCacheDir().If this permission is not whitelisted for an app that targets an API level before Build.VERSION_CODES.Q this permission cannot be granted to apps.",
        "minAPI": "4",
        "risk": "dangerous"
    },
    {
        "id": "android.permission.WRITE_GSERVICES",
        "title": "android.permission.WRITE_GSERVICES",
        "description": "Allows an application to modify the Google service map.",
        "minAPI": "1",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.WRITE_SECURE_SETTINGS",
        "title": "android.permission.WRITE_SECURE_SETTINGS",
        "description": "Allows an application to read or write the secure system settings.",
        "minAPI": "3",
        "risk": "Not for use by third-party application"
    },
    {
        "id": "android.permission.WRITE_SETTINGS",
        "title": "android.permission.WRITE_SETTINGS",
        "description": "Allows an application to read or write the system settings.Note: If the app targets API level 23 or higher, the app user must explicitly grant this permission to the app through a permission management screen. The app requests the user's approval by sending an intent with action Settings.ACTION_MANAGE_WRITE_SETTINGS. The app can check whether it has this authorization by calling Settings.System.canWrite().",
        "minAPI": "1",
        "risk": "signature|preinstalled|appop|pre23"
    },
    {
        "id": "android.permission.WRITE_SYNC_SETTINGS",
        "title": "android.permission.WRITE_SYNC_SETTINGS",
        "description": "Allows applications to write the sync settings.",
        "minAPI": "1",
        "risk": "normal"
    },
    {
        "id": "android.permission.WRITE_VOICEMAIL",
        "title": "android.permission.WRITE_VOICEMAIL",
        "description": "Allows an application to modify and remove existing voicemails in the system.",
        "minAPI": "21",
        "risk": "signature|privileged"
    }
]



export default permissions
