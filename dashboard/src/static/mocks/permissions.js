const permissions = [
    {
        "name": "android.permission.ACCEPT_HANDOVER",
        "minAPI": "28",
        "risk": "dangerous",
        "description": "Allows a calling app to continue a call which was started in another app. An example is a video calling app that wants to continue a voice call on the user's mobile network.When the handover of a call from one app to another takes place, there are two devices which are involved in the handover; the initiating and receiving devices. The initiating device is where the request to handover the call was started, and the receiving device is where the handover request is confirmed by the other party.This permission protects access to the TelecomManager.acceptHandover(Uri, int, PhoneAccountHandle) which the receiving side of the handover uses to accept a handover."
    },
    {
        "name": "android.permission.ACCESS_BACKGROUND_LOCATION",
        "minAPI": "29",
        "risk": "dangerous",
        "description": "Allows an app to access location in the background. If you're requesting this permission, you must also request either ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION. Requesting this permission by itself doesn't give you location access.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.ACCESS_CHECKIN_PROPERTIES",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows read/write access to the \"properties\" table in the checkin database, to change values that get uploaded."
    },
    {
        "name": "android.permission.ACCESS_COARSE_LOCATION",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an app to access approximate location. Alternatively, you might want ACCESS_FINE_LOCATION."
    },
    {
        "name": "android.permission.ACCESS_FINE_LOCATION",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an app to access precise location. Alternatively, you might want ACCESS_COARSE_LOCATION."
    },
    {
        "name": "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to access extra location provider commands."
    },
    {
        "name": "android.permission.ACCESS_MEDIA_LOCATION",
        "minAPI": "29",
        "risk": "dangerous",
        "description": "Allows an application to access any geographic locations persisted in the user's shared collection."
    },
    {
        "name": "android.permission.ACCESS_NETWORK_STATE",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to access information about networks."
    },
    {
        "name": "android.permission.ACCESS_NOTIFICATION_POLICY",
        "minAPI": "23",
        "risk": "normal",
        "description": "Marker permission for applications that wish to access notification policy. This permission is not supported on managed profiles."
    },
    {
        "name": "android.permission.ACCESS_WIFI_STATE",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to access information about Wi-Fi networks."
    },
    {
        "name": "android.permission.ACCOUNT_MANAGER",
        "minAPI": "5",
        "risk": "Not for use by third-party application",
        "description": "Allows applications to call into AccountAuthenticators."
    },
    {
        "name": "android.permission.ACTIVITY_RECOGNITION",
        "minAPI": "29",
        "risk": "dangerous",
        "description": "Allows an application to recognize physical activity."
    },
    {
        "name": "android.permission.ADD_VOICEMAIL",
        "minAPI": "14",
        "risk": "dangerous",
        "description": "Allows an application to add voicemails into the system."
    },
    {
        "name": "android.permission.ANSWER_PHONE_CALLS",
        "minAPI": "26",
        "risk": "dangerous",
        "description": "Allows the app to answer an incoming phone call."
    },
    {
        "name": "android.permission.BATTERY_STATS",
        "minAPI": "1",
        "risk": "signature|privileged|development",
        "description": "Allows an application to collect battery statistics"
    },
    {
        "name": "android.permission.BIND_ACCESSIBILITY_SERVICE",
        "minAPI": "16",
        "risk": "signature",
        "description": "Must be required by an AccessibilityService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_APPWIDGET",
        "minAPI": "3",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to tell the AppWidget service which application can access AppWidget's data. The normal user flow is that a user picks an AppWidget to go into a particular host, thereby giving that host application access to the private data from the AppWidget app. An application that has this permission should honor that contract."
    },
    {
        "name": "android.permission.BIND_AUTOFILL_SERVICE",
        "minAPI": "26",
        "risk": "signature",
        "description": "Must be required by a AutofillService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_CALL_REDIRECTION_SERVICE",
        "minAPI": "29",
        "risk": "signature|privileged",
        "description": "Must be required by a CallRedirectionService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE",
        "minAPI": "29",
        "risk": "signature",
        "description": "A subclass of CarrierMessagingClientService must be protected with this permission."
    },
    {
        "name": "android.permission.BIND_CARRIER_MESSAGING_SERVICE",
        "minAPI": "22",
        "risk": "",
        "description": "This constant was deprecated in API level 23.\nUse BIND_CARRIER_SERVICES instead"
    },
    {
        "name": "android.permission.BIND_CARRIER_SERVICES",
        "minAPI": "23",
        "risk": "signature|privileged",
        "description": "The system process that is allowed to bind to services in carrier apps will have this permission. Carrier apps should use this permission to protect their services that only the system is allowed to bind to."
    },
    {
        "name": "android.permission.BIND_CHOOSER_TARGET_SERVICE",
        "minAPI": "23",
        "risk": "signature",
        "description": "This constant was deprecated in API level R.\nFor publishing direct share targets, please follow the instructions in https://developer.android.com/training/sharing/receive.html#providing-direct-share-targets instead.Must be required by a ChooserTargetService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_CONDITION_PROVIDER_SERVICE",
        "minAPI": "24",
        "risk": "signature",
        "description": "Must be required by a ConditionProviderService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_CONTROLS",
        "minAPI": "R",
        "risk": "",
        "description": "Allows SystemUI to request third party controls.Should only be requested by the System and required by ControlsProviderService declarations."
    },
    {
        "name": "android.permission.BIND_DEVICE_ADMIN",
        "minAPI": "8",
        "risk": "signature",
        "description": "Must be required by device administration receiver, to ensure that only the system can interact with it."
    },
    {
        "name": "android.permission.BIND_DREAM_SERVICE",
        "minAPI": "21",
        "risk": "signature",
        "description": "Must be required by an DreamService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_INCALL_SERVICE",
        "minAPI": "23",
        "risk": "signature|privileged",
        "description": "Must be required by a InCallService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_INPUT_METHOD",
        "minAPI": "3",
        "risk": "signature",
        "description": "Must be required by an InputMethodService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_MIDI_DEVICE_SERVICE",
        "minAPI": "23",
        "risk": "signature",
        "description": "Must be required by an MidiDeviceService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_NFC_SERVICE",
        "minAPI": "19",
        "risk": "signature",
        "description": "Must be required by a HostApduService or OffHostApduService to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE",
        "minAPI": "18",
        "risk": "signature",
        "description": "Must be required by an NotificationListenerService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_PRINT_SERVICE",
        "minAPI": "19",
        "risk": "signature",
        "description": "Must be required by a PrintService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE",
        "minAPI": "R",
        "risk": "signature",
        "description": "Must be required by a QuickAccessWalletService to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_QUICK_SETTINGS_TILE",
        "minAPI": "24",
        "risk": "",
        "description": "Allows an application to bind to third party quick settings tiles.Should only be requested by the System, should be required by TileService declarations."
    },
    {
        "name": "android.permission.BIND_REMOTEVIEWS",
        "minAPI": "11",
        "risk": "signature|privileged",
        "description": "Must be required by a RemoteViewsService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_SCREENING_SERVICE",
        "minAPI": "24",
        "risk": "signature|privileged",
        "description": "Must be required by a CallScreeningService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_TELECOM_CONNECTION_SERVICE",
        "minAPI": "23",
        "risk": "signature|privileged",
        "description": "Must be required by a ConnectionService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_TEXT_SERVICE",
        "minAPI": "14",
        "risk": "signature",
        "description": "Must be required by a TextService (e.g. SpellCheckerService) to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_TV_INPUT",
        "minAPI": "21",
        "risk": "signature|privileged",
        "description": "Must be required by a TvInputService to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE",
        "minAPI": "26",
        "risk": "signature|privileged",
        "description": "Must be required by a link VisualVoicemailService to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_VOICE_INTERACTION",
        "minAPI": "21",
        "risk": "signature",
        "description": "Must be required by a VoiceInteractionService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_VPN_SERVICE",
        "minAPI": "14",
        "risk": "signature",
        "description": "Must be required by a VpnService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_VR_LISTENER_SERVICE",
        "minAPI": "24",
        "risk": "signature",
        "description": "Must be required by an VrListenerService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BIND_WALLPAPER",
        "minAPI": "8",
        "risk": "signature|privileged",
        "description": "Must be required by a WallpaperService, to ensure that only the system can bind to it."
    },
    {
        "name": "android.permission.BLUETOOTH",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to connect to paired bluetooth devices."
    },
    {
        "name": "android.permission.BLUETOOTH_ADMIN",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to discover and pair bluetooth devices."
    },
    {
        "name": "android.permission.BLUETOOTH_PRIVILEGED",
        "minAPI": "19",
        "risk": "Not for use by third-party application",
        "description": "Allows applications to pair bluetooth devices without user interaction, and to allow or disallow phonebook access or message access."
    },
    {
        "name": "android.permission.BODY_SENSORS",
        "minAPI": "20",
        "risk": "dangerous",
        "description": "Allows an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
    },
    {
        "name": "android.permission.BROADCAST_PACKAGE_REMOVED",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to broadcast a notification that an application package has been removed."
    },
    {
        "name": "android.permission.BROADCAST_SMS",
        "minAPI": "2",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to broadcast an SMS receipt notification."
    },
    {
        "name": "android.permission.BROADCAST_STICKY",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to broadcast sticky intents. These are broadcasts whose data is held by the system after being finished, so that clients can quickly retrieve that data without having to wait for the next broadcast."
    },
    {
        "name": "android.permission.BROADCAST_WAP_PUSH",
        "minAPI": "2",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to broadcast a WAP PUSH receipt notification."
    },
    {
        "name": "android.permission.CALL_COMPANION_APP",
        "minAPI": "29",
        "risk": "normal",
        "description": "Allows an app which implements the InCallService API to be eligible to be enabled as a calling companion app. This means that the Telecom framework will bind to the app's InCallService implementation when there are calls active. The app can use the InCallService API to view information about calls on the system and control these calls."
    },
    {
        "name": "android.permission.CALL_PHONE",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call."
    },
    {
        "name": "android.permission.CALL_PRIVILEGED",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to call any phone number, including emergency numbers, without going through the Dialer user interface for the user to confirm the call being placed."
    },
    {
        "name": "android.permission.CAMERA",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Required to be able to access the camera device.This will automatically enforce the uses-feature manifest element for all camera features. If you do not require all camera features or can properly operate if a camera is not available, then you must modify your manifest as appropriate in order to install on devices that don't support all camera features."
    },
    {
        "name": "android.permission.CAPTURE_AUDIO_OUTPUT",
        "minAPI": "19",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to capture audio output. Use the CAPTURE_MEDIA_OUTPUT permission if only the USAGE_UNKNOWN), USAGE_MEDIA) or USAGE_GAME) usages are intended to be captured."
    },
    {
        "name": "android.permission.CHANGE_COMPONENT_ENABLED_STATE",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to change whether an application component (other than its own) is enabled or not."
    },
    {
        "name": "android.permission.CHANGE_CONFIGURATION",
        "minAPI": "1",
        "risk": "signature|privileged|development",
        "description": "Allows an application to modify the current configuration, such as locale."
    },
    {
        "name": "android.permission.CHANGE_NETWORK_STATE",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to change network connectivity state."
    },
    {
        "name": "android.permission.CHANGE_WIFI_MULTICAST_STATE",
        "minAPI": "4",
        "risk": "normal",
        "description": "Allows applications to enter Wi-Fi Multicast mode."
    },
    {
        "name": "android.permission.CHANGE_WIFI_STATE",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to change Wi-Fi connectivity state."
    },
    {
        "name": "android.permission.CLEAR_APP_CACHE",
        "minAPI": "1",
        "risk": "signature|privileged",
        "description": "Allows an application to clear the caches of all installed applications on the device."
    },
    {
        "name": "android.permission.CONTROL_LOCATION_UPDATES",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows enabling/disabling location update notifications from the radio."
    },
    {
        "name": "android.permission.DELETE_CACHE_FILES",
        "minAPI": "1",
        "risk": "signature|privileged",
        "description": "Old permission for deleting an app's cache files, no longer used, but signals for us to quietly ignore calls instead of throwing an exception."
    },
    {
        "name": "android.permission.DELETE_PACKAGES",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to delete packages.Starting in Build.VERSION_CODES.N, user confirmation is requested when the application deleting the package is not the same application that installed the package."
    },
    {
        "name": "android.permission.DIAGNOSTIC",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows applications to RW to diagnostic resources."
    },
    {
        "name": "android.permission.DISABLE_KEYGUARD",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to disable the keyguard if it is not secure."
    },
    {
        "name": "android.permission.DUMP",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to retrieve state dump information from system services."
    },
    {
        "name": "android.permission.EXPAND_STATUS_BAR",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to expand or collapse the status bar."
    },
    {
        "name": "android.permission.FACTORY_TEST",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Run as a manufacturer test application, running as the root user. Only available when the device is running in manufacturer test mode."
    },
    {
        "name": "android.permission.FOREGROUND_SERVICE",
        "minAPI": "28",
        "risk": "normal",
        "description": "Allows a regular application to use Service.startForeground."
    },
    {
        "name": "android.permission.GET_ACCOUNTS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows access to the list of accounts in the Accounts Service.Note: Beginning with Android 6.0 (API level 23), if an app shares the signature of the authenticator that manages an account, it does not need \"GET_ACCOUNTS\" permission to read information about that account. On Android 5.1 and lower, all apps need \"GET_ACCOUNTS\" permission to read information about any account."
    },
    {
        "name": "android.permission.GET_ACCOUNTS_PRIVILEGED",
        "minAPI": "23",
        "risk": "signature|privileged",
        "description": "Allows access to the list of accounts in the Accounts Service."
    },
    {
        "name": "android.permission.GET_PACKAGE_SIZE",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to find out the space used by any package."
    },
    {
        "name": "android.permission.GET_TASKS",
        "minAPI": "1",
        "risk": "",
        "description": "This constant was deprecated in API level 21.\nNo longer enforced."
    },
    {
        "name": "android.permission.GLOBAL_SEARCH",
        "minAPI": "4",
        "risk": "signature|privileged",
        "description": "This permission can be used on content providers to allow the global search system to access their data. Typically it used when the provider has some permissions protecting it (which global search would not be expected to hold), and added as a read-only permission to the path in the provider where global search queries are performed. This permission can not be held by regular applications; it is used by applications to protect themselves from everyone else besides global search."
    },
    {
        "name": "android.permission.INSTALL_LOCATION_PROVIDER",
        "minAPI": "4",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to install a location provider into the Location Manager."
    },
    {
        "name": "android.permission.INSTALL_PACKAGES",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to install packages."
    },
    {
        "name": "android.permission.INSTALL_SHORTCUT",
        "minAPI": "19",
        "risk": "normal",
        "description": "Allows an application to install a shortcut in Launcher.In Android O (API level 26) and higher, the INSTALL_SHORTCUT broadcast no longer has any effect on your app because it's a private, implicit broadcast. Instead, you should create an app shortcut by using the requestPinShortcut() method from the ShortcutManager class."
    },
    {
        "name": "android.permission.INSTANT_APP_FOREGROUND_SERVICE",
        "minAPI": "26",
        "risk": "signature|development|instant|appop",
        "description": "Allows an instant app to create foreground services."
    },
    {
        "name": "android.permission.INTERACT_ACROSS_PROFILES",
        "minAPI": "R",
        "risk": "",
        "description": "Allows interaction across profiles in the same profile group."
    },
    {
        "name": "android.permission.INTERNET",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to open network sockets."
    },
    {
        "name": "android.permission.KILL_BACKGROUND_PROCESSES",
        "minAPI": "8",
        "risk": "normal",
        "description": "Allows an application to call ActivityManager.killBackgroundProcesses(String)."
    },
    {
        "name": "android.permission.LOADER_USAGE_STATS",
        "minAPI": "R",
        "risk": "signature|privileged|appop",
        "description": "Allows a data loader to read a package's access logs. The access logs contain the set of pages referenced over time.Declaring the permission implies intention to use the API and the user of the device can grant permission through the Settings application."
    },
    {
        "name": "android.permission.LOCATION_HARDWARE",
        "minAPI": "18",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to use location features in hardware, such as the geofencing api."
    },
    {
        "name": "android.permission.MANAGE_DOCUMENTS",
        "minAPI": "19",
        "risk": "",
        "description": "Allows an application to manage access to documents, usually as part of a document picker.This permission should only be requested by the platform document management app. This permission cannot be granted to third-party apps."
    },
    {
        "name": "android.permission.MANAGE_EXTERNAL_STORAGE",
        "minAPI": "R",
        "risk": "signature|appop|preinstalled",
        "description": "Allows an application a broad access to external storage in scoped storage. Intended to be used by few apps that need to manage files on behalf of the users."
    },
    {
        "name": "android.permission.MANAGE_OWN_CALLS",
        "minAPI": "26",
        "risk": "normal",
        "description": "Allows a calling application which manages it own calls through the self-managed ConnectionService APIs. See PhoneAccount.CAPABILITY_SELF_MANAGED for more information on the self-managed ConnectionService APIs."
    },
    {
        "name": "android.permission.MASTER_CLEAR",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": ""
    },
    {
        "name": "android.permission.MEDIA_CONTENT_CONTROL",
        "minAPI": "19",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to know what content is playing and control its playback."
    },
    {
        "name": "android.permission.MODIFY_AUDIO_SETTINGS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to modify global audio settings."
    },
    {
        "name": "android.permission.MODIFY_PHONE_STATE",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows modification of the telephony state - power on, mmi, etc. Does not include placing calls."
    },
    {
        "name": "android.permission.MOUNT_FORMAT_FILESYSTEMS",
        "minAPI": "3",
        "risk": "Not for use by third-party application",
        "description": "Allows formatting file systems for removable storage."
    },
    {
        "name": "android.permission.MOUNT_UNMOUNT_FILESYSTEMS",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows mounting and unmounting file systems for removable storage."
    },
    {
        "name": "android.permission.NFC",
        "minAPI": "9",
        "risk": "normal",
        "description": "Allows applications to perform I/O operations over NFC."
    },
    {
        "name": "android.permission.NFC_PREFERRED_PAYMENT_INFO",
        "minAPI": "R",
        "risk": "normal",
        "description": "Allows applications to receive NFC preferred payment service information."
    },
    {
        "name": "android.permission.NFC_TRANSACTION_EVENT",
        "minAPI": "28",
        "risk": "normal",
        "description": "Allows applications to receive NFC transaction events."
    },
    {
        "name": "android.permission.PACKAGE_USAGE_STATS",
        "minAPI": "23",
        "risk": "signature|privileged|development|appop|retailDemo",
        "description": "Allows an application to collect component usage statisticsDeclaring the permission implies intention to use the API and the user of the device can grant permission through the Settings application."
    },
    {
        "name": "android.permission.PERSISTENT_ACTIVITY",
        "minAPI": "1",
        "risk": "",
        "description": "This constant was deprecated in API level 15.\nThis functionality will be removed in the future; please do not use. Allow an application to make its activities persistent."
    },
    {
        "name": "android.permission.PROCESS_OUTGOING_CALLS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "This constant was deprecated in API level 29.\nApplications should use CallRedirectionService instead of the Intent.ACTION_NEW_OUTGOING_CALL broadcast.Allows an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.QUERY_ALL_PACKAGES",
        "minAPI": "R",
        "risk": "",
        "description": "Allows query of any normal app on the device, regardless of manifest declarations."
    },
    {
        "name": "android.permission.READ_CALENDAR",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to read the user's calendar data."
    },
    {
        "name": "android.permission.READ_CALL_LOG",
        "minAPI": "16",
        "risk": "dangerous",
        "description": "Allows an application to read the user's call log.Note: If your app uses the READ_CONTACTS permission and both your minSdkVersion and targetSdkVersion values are set to 15 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 16 or higher.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.READ_CONTACTS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to read the user's contacts data."
    },
    {
        "name": "android.permission.READ_EXTERNAL_STORAGE",
        "minAPI": "16",
        "risk": "dangerous",
        "description": "Allows an application to read from external storage.Any app that declares the WRITE_EXTERNAL_STORAGE permission is implicitly granted this permission.This permission is enforced starting in API level 19. Before API level 19, this permission is not enforced and all apps still have access to read from external storage. You can test your app with the permission enforced by enabling Protect USB storage under Developer options in the Settings app on a device running Android 4.1 or higher.Also starting in API level 19, this permission is not required to read/write files in your application-specific directories returned by Context.getExternalFilesDir(String) and Context.getExternalCacheDir().Note: If both your minSdkVersion and targetSdkVersion values are set to 3 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 4 or higher.This is a soft restricted permission which cannot be held by an app it its full form until the installer on record whitelists the permission. Specifically, if the permission is whitelisted the holder app can access external storage and the visual and aural media collections while if the permission is not whitelisted the holder app can only access to the visual and aural medial collections. Also the permission is immutably restricted meaning that the whitelist state can be specified only at install time and cannot change until the app is installed. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.READ_INPUT_STATE",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "This constant was deprecated in API level 16.\nThe API that used this permission has been removed.Allows an application to retrieve the current state of keys and switches."
    },
    {
        "name": "android.permission.READ_LOGS",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to read the low-level system log files."
    },
    {
        "name": "android.permission.READ_PHONE_NUMBERS",
        "minAPI": "26",
        "risk": "dangerous",
        "description": "Allows read access to the device's phone number(s). This is a subset of the capabilities granted by READ_PHONE_STATE but is exposed to instant applications."
    },
    {
        "name": "android.permission.READ_PHONE_STATE",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows read only access to phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.Note: If both your minSdkVersion and targetSdkVersion values are set to 3 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 4 or higher."
    },
    {
        "name": "android.permission.READ_PRECISE_PHONE_STATE",
        "minAPI": "R",
        "risk": "",
        "description": "Allows read only access to precise phone state. Allows reading of detailed information about phone state for special-use applications such as dialers, carrier applications, or ims applications."
    },
    {
        "name": "android.permission.READ_SMS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to read SMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.READ_SYNC_SETTINGS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to read the sync settings."
    },
    {
        "name": "android.permission.READ_SYNC_STATS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to read the sync stats."
    },
    {
        "name": "android.permission.READ_VOICEMAIL",
        "minAPI": "21",
        "risk": "signature|privileged",
        "description": "Allows an application to read voicemails in the system."
    },
    {
        "name": "android.permission.REBOOT",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Required to be able to reboot the device."
    },
    {
        "name": "android.permission.RECEIVE_BOOT_COMPLETED",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to receive the Intent.ACTION_BOOT_COMPLETED that is broadcast after the system finishes booting. If you don't request this permission, you will not receive the broadcast at that time. Though holding this permission does not have any security implications, it can have a negative impact on the user experience by increasing the amount of time it takes the system to start and allowing applications to have themselves running without the user being aware of them. As such, you must explicitly declare your use of this facility to make that visible to the user."
    },
    {
        "name": "android.permission.RECEIVE_MMS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to monitor incoming MMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.RECEIVE_SMS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to receive SMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.RECEIVE_WAP_PUSH",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to receive WAP push messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.RECORD_AUDIO",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to record audio."
    },
    {
        "name": "android.permission.REORDER_TASKS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows an application to change the Z-order of tasks."
    },
    {
        "name": "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND",
        "minAPI": "26",
        "risk": "normal",
        "description": "Allows a companion app to run in the background."
    },
    {
        "name": "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND",
        "minAPI": "26",
        "risk": "normal",
        "description": "Allows a companion app to use data in the background."
    },
    {
        "name": "android.permission.REQUEST_DELETE_PACKAGES",
        "minAPI": "26",
        "risk": "normal",
        "description": "Allows an application to request deleting packages. Apps targeting APIs Build.VERSION_CODES.P or greater must hold this permission in order to use Intent.ACTION_UNINSTALL_PACKAGE or PackageInstaller.uninstall(VersionedPackage, IntentSender)."
    },
    {
        "name": "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        "minAPI": "23",
        "risk": "normal",
        "description": "Permission an application must hold in order to use Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS."
    },
    {
        "name": "android.permission.REQUEST_INSTALL_PACKAGES",
        "minAPI": "23",
        "risk": "signature",
        "description": "Allows an application to request installing packages. Apps targeting APIs greater than 25 must hold this permission in order to use Intent.ACTION_INSTALL_PACKAGE."
    },
    {
        "name": "android.permission.REQUEST_PASSWORD_COMPLEXITY",
        "minAPI": "29",
        "risk": "normal",
        "description": "Allows an application to request the screen lock complexity and prompt users to update the screen lock to a certain complexity level."
    },
    {
        "name": "android.permission.RESTART_PACKAGES",
        "minAPI": "1",
        "risk": "",
        "description": "This constant was deprecated in API level 15.\nThe ActivityManager.restartPackage(String) API is no longer supported."
    },
    {
        "name": "android.permission.SEND_RESPOND_VIA_MESSAGE",
        "minAPI": "18",
        "risk": "Not for use by third-party application",
        "description": "Allows an application (Phone) to send a request to other applications to handle the respond-via-message action during incoming calls."
    },
    {
        "name": "android.permission.SEND_SMS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to send SMS messages.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.SET_ALARM",
        "minAPI": "9",
        "risk": "normal",
        "description": "Allows an application to broadcast an Intent to set an alarm for the user."
    },
    {
        "name": "android.permission.SET_ALWAYS_FINISH",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to control whether activities are immediately finished when put in the background."
    },
    {
        "name": "android.permission.SET_ANIMATION_SCALE",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Modify the global animation scaling factor."
    },
    {
        "name": "android.permission.SET_DEBUG_APP",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Configure an application for debugging."
    },
    {
        "name": "android.permission.SET_PREFERRED_APPLICATIONS",
        "minAPI": "1",
        "risk": "",
        "description": "This constant was deprecated in API level 15.\nNo longer useful, see PackageManager.addPackageToPreferred(String) for details."
    },
    {
        "name": "android.permission.SET_PROCESS_LIMIT",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to set the maximum number of (not needed) application processes that can be running."
    },
    {
        "name": "android.permission.SET_TIME",
        "minAPI": "8",
        "risk": "Not for use by third-party application",
        "description": "Allows applications to set the system time directly."
    },
    {
        "name": "android.permission.SET_TIME_ZONE",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows applications to set the system time zone directly."
    },
    {
        "name": "android.permission.SET_WALLPAPER",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to set the wallpaper."
    },
    {
        "name": "android.permission.SET_WALLPAPER_HINTS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to set the wallpaper hints."
    },
    {
        "name": "android.permission.SIGNAL_PERSISTENT_PROCESSES",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allow an application to request that a signal be sent to all persistent processes."
    },
    {
        "name": "android.permission.SMS_FINANCIAL_TRANSACTIONS",
        "minAPI": "29",
        "risk": "",
        "description": "Allows financial apps to read filtered sms messages. Protection level: signature|appop"
    },
    {
        "name": "android.permission.START_VIEW_PERMISSION_USAGE",
        "minAPI": "29",
        "risk": "signature|installer",
        "description": "Allows the holder to start the permission usage screen for an app."
    },
    {
        "name": "android.permission.STATUS_BAR",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to open, close, or disable the status bar and its icons."
    },
    {
        "name": "android.permission.SYSTEM_ALERT_WINDOW",
        "minAPI": "1",
        "risk": "signature|preinstalled|appop|pre23|development",
        "description": "Allows an app to create windows using the type WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY, shown on top of all other apps. Very few apps should use this permission; these windows are intended for system-level interaction with the user.Note: If the app targets API level 23 or higher, the app user must explicitly grant this permission to the app through a permission management screen. The app requests the user's approval by sending an intent with action Settings.ACTION_MANAGE_OVERLAY_PERMISSION. The app can check whether it has this authorization by calling Settings.canDrawOverlays()."
    },
    {
        "name": "android.permission.TRANSMIT_IR",
        "minAPI": "19",
        "risk": "normal",
        "description": "Allows using the device's IR transmitter, if available."
    },
    {
        "name": "android.permission.UNINSTALL_SHORTCUT",
        "minAPI": "19",
        "risk": "",
        "description": "Don't use this permission in your app.\nThis permission is no longer supported."
    },
    {
        "name": "android.permission.UPDATE_DEVICE_STATS",
        "minAPI": "3",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to update device statistics."
    },
    {
        "name": "android.permission.USE_BIOMETRIC",
        "minAPI": "28",
        "risk": "normal",
        "description": "Allows an app to use device supported biometric modalities."
    },
    {
        "name": "android.permission.USE_FINGERPRINT",
        "minAPI": "23",
        "risk": "normal",
        "description": "This constant was deprecated in API level 28.\nApplications should request USE_BIOMETRIC insteadAllows an app to use fingerprint hardware."
    },
    {
        "name": "android.permission.USE_FULL_SCREEN_INTENT",
        "minAPI": "29",
        "risk": "normal",
        "description": "Required for apps targeting Build.VERSION_CODES.Q that want to use notification full screen intents."
    },
    {
        "name": "android.permission.USE_SIP",
        "minAPI": "9",
        "risk": "dangerous",
        "description": "Allows an application to use SIP service."
    },
    {
        "name": "android.permission.VIBRATE",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows access to the vibrator."
    },
    {
        "name": "android.permission.WAKE_LOCK",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows using PowerManager WakeLocks to keep processor from sleeping or screen from dimming."
    },
    {
        "name": "android.permission.WRITE_APN_SETTINGS",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows applications to write the apn settings and read sensitive fields of an existing apn settings like user and password."
    },
    {
        "name": "android.permission.WRITE_CALENDAR",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to write the user's calendar data."
    },
    {
        "name": "android.permission.WRITE_CALL_LOG",
        "minAPI": "16",
        "risk": "dangerous",
        "description": "Allows an application to write (but not read) the user's call log data.Note: If your app uses the WRITE_CONTACTS permission and both your minSdkVersion and targetSdkVersion values are set to 15 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 16 or higher.This is a hard restricted permission which cannot be held by an app until the installer on record whitelists the permission. For more details see PackageInstaller.SessionParams.setWhitelistedRestrictedPermissions(Set)."
    },
    {
        "name": "android.permission.WRITE_CONTACTS",
        "minAPI": "1",
        "risk": "dangerous",
        "description": "Allows an application to write the user's contacts data."
    },
    {
        "name": "android.permission.WRITE_EXTERNAL_STORAGE",
        "minAPI": "4",
        "risk": "dangerous",
        "description": "Allows an application to write to external storage.Note: If both your minSdkVersion and targetSdkVersion values are set to 3 or lower, the system implicitly grants your app this permission. If you don't need this permission, be sure your targetSdkVersion is 4 or higher.Starting in API level 19, this permission is not required to read/write files in your application-specific directories returned by Context.getExternalFilesDir(String) and Context.getExternalCacheDir().If this permission is not whitelisted for an app that targets an API level before Build.VERSION_CODES.Q this permission cannot be granted to apps."
    },
    {
        "name": "android.permission.WRITE_GSERVICES",
        "minAPI": "1",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to modify the Google service map."
    },
    {
        "name": "android.permission.WRITE_SECURE_SETTINGS",
        "minAPI": "3",
        "risk": "Not for use by third-party application",
        "description": "Allows an application to read or write the secure system settings."
    },
    {
        "name": "android.permission.WRITE_SETTINGS",
        "minAPI": "1",
        "risk": "signature|preinstalled|appop|pre23",
        "description": "Allows an application to read or write the system settings.Note: If the app targets API level 23 or higher, the app user must explicitly grant this permission to the app through a permission management screen. The app requests the user's approval by sending an intent with action Settings.ACTION_MANAGE_WRITE_SETTINGS. The app can check whether it has this authorization by calling Settings.System.canWrite()."
    },
    {
        "name": "android.permission.WRITE_SYNC_SETTINGS",
        "minAPI": "1",
        "risk": "normal",
        "description": "Allows applications to write the sync settings."
    },
    {
        "name": "android.permission.WRITE_VOICEMAIL",
        "minAPI": "21",
        "risk": "signature|privileged",
        "description": "Allows an application to modify and remove existing voicemails in the system."
    }
]


export default permissions