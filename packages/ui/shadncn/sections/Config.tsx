"use client"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../base/card'
import { Label } from '../base/label'
import { Input } from '../base/input'
import { Switch } from '../base/switch'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../base/select'
import { Button } from '../base/button'

export default function Config() {
    const [darkMode, setDarkMode] = useState(false)
    const [notifications, setNotifications] = useState(true)
    const [privacy, setPrivacy] = useState(false)

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>General</CardTitle>
                    <CardDescription>Manage your general account settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Username</Label>
                            <p className="text-sm text-muted-foreground">Your public display name</p>
                        </div>
                        <Input id="username" defaultValue="johndoe" className="w-[180px]" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Email</Label>
                            <p className="text-sm text-muted-foreground">Your email address</p>
                        </div>
                        <Input id="email" defaultValue="john@example.com" className="w-[180px]" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Customize the look of the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Dark Mode</Label>
                            <p className="text-sm text-muted-foreground">Toggle dark mode on or off</p>
                        </div>
                        <Switch
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                            aria-label="Toggle dark mode"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Theme</Label>
                            <p className="text-sm text-muted-foreground">Select your preferred theme</p>
                        </div>
                        <Select defaultValue="system">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Enable Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications about updates and activity</p>
                        </div>
                        <Switch
                            checked={notifications}
                            onCheckedChange={setNotifications}
                            aria-label="Toggle notifications"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Privacy</CardTitle>
                    <CardDescription>Manage your privacy settings</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Private Account</Label>
                            <p className="text-sm text-muted-foreground">Make your account private</p>
                        </div>
                        <Switch
                            checked={privacy}
                            onCheckedChange={setPrivacy}
                            aria-label="Toggle privacy"
                        />
                    </div>
                </CardContent>
            </Card>

            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </CardFooter>
        </div>
    )
}
