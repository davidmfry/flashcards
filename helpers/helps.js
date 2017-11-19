import { AsyncStorage} from 'react-native'
import {Notifications, Permissions } from 'expo'
import { NOTIFICATION_KEY } from "./ConstKeys";

export function clearLocalNotifications ()
{
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification ()
{
    return {
        title: 'Take a Quiz!',
        body: "Don't forget to take a quiz today.  A little bit of study will help you retain the knowledge!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotifications ()
{
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then( (data) => {
            if(data === null)
            {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then( ({ status }) => {
                        if (status === 'granted')
                        {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)


                            Notifications.scheduleLocalNotificationsAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                                .then(alert('note created'))
                        }
                    })
            }
        })
}
