# Feature Request Prompts

Prompts for implementing new features and functionality in the web application boilerplate.

## 🔐 Authentication Features

### User Registration System

```
Implement a complete user registration system:

Requirements:
- Create registration form component with validation
- Add email verification functionality
- Implement password strength requirements
- Add terms of service acceptance
- Include proper error handling and user feedback
- Use the existing API routes and database schema

Components needed:
- RegistrationForm component
- Email verification page
- Success/error states
- Form validation with Zod

The system should:
- Validate email format and uniqueness
- Enforce strong password requirements
- Send verification emails
- Handle registration errors gracefully
- Provide clear user feedback
```

### Password Reset System

```
Implement a password reset system:

Requirements:
- Create forgot password form
- Add password reset email functionality
- Implement secure reset token generation
- Create reset password form
- Add token expiration handling
- Use existing authentication patterns

Components needed:
- ForgotPasswordForm component
- ResetPasswordForm component
- Email templates
- Token validation logic

The system should:
- Generate secure reset tokens
- Send password reset emails
- Validate tokens and expiration
- Allow secure password updates
- Provide clear user feedback
```

### Social Authentication

```
Add social authentication (Google, GitHub, etc.):

Requirements:
- Integrate with OAuth providers
- Create social login buttons
- Handle OAuth callbacks
- Merge social accounts with existing users
- Maintain existing authentication flow
- Use secure token handling

Components needed:
- SocialLoginButtons component
- OAuth callback handlers
- Account linking functionality
- Error handling for OAuth failures

The system should:
- Support multiple OAuth providers
- Handle account linking/merging
- Maintain user session consistency
- Provide fallback to email/password
```

## 📊 Dashboard Features

### User Dashboard

```
Create a user dashboard with profile management:

Requirements:
- Display user information and statistics
- Allow profile editing
- Show recent activity
- Include settings management
- Add data visualization components
- Use existing authentication and database patterns

Components needed:
- DashboardLayout component
- ProfileCard component
- ActivityFeed component
- SettingsPanel component
- Data visualization components

The dashboard should:
- Display personalized information
- Allow easy profile updates
- Show user activity history
- Provide quick access to settings
- Include responsive design
```

### Admin Panel

```
Implement an admin panel for user and system management:

Requirements:
- Create admin-only routes and components
- Add user management functionality
- Include system statistics and monitoring
- Add role-based access control
- Implement audit logging
- Use existing authentication patterns

Components needed:
- AdminLayout component
- UserManagement component
- SystemStats component
- AuditLog component
- RoleManagement component

The admin panel should:
- Require admin authentication
- Provide user management tools
- Show system statistics
- Include audit trail
- Support role management
```

## 📝 Content Management

### Blog System

```
Implement a blog/content management system:

Requirements:
- Create blog post creation and editing
- Add rich text editor
- Implement post categorization and tagging
- Add comment system
- Include search and filtering
- Use existing database and authentication patterns

Components needed:
- BlogEditor component
- PostList component
- PostDetail component
- CommentSystem component
- SearchAndFilter component

The blog system should:
- Support rich text editing
- Allow post categorization
- Include comment functionality
- Provide search capabilities
- Support draft/published states
```

### File Upload System

```
Add file upload and management functionality:

Requirements:
- Create file upload components
- Implement file validation and security
- Add image processing and optimization
- Create file management interface
- Include file sharing capabilities
- Use secure file storage patterns

Components needed:
- FileUpload component
- FileManager component
- ImagePreview component
- FileSharing component
- UploadProgress component

The file system should:
- Validate file types and sizes
- Process and optimize images
- Provide secure file access
- Support file sharing
- Include progress indicators
```

## 🔔 Notification System

### Real-time Notifications

```
Implement a real-time notification system:

Requirements:
- Add WebSocket or Server-Sent Events
- Create notification components
- Implement notification preferences
- Add notification history
- Include push notification support
- Use existing authentication patterns

Components needed:
- NotificationCenter component
- NotificationItem component
- NotificationPreferences component
- NotificationHistory component
- PushNotificationService

The notification system should:
- Support real-time updates
- Allow preference management
- Maintain notification history
- Support different notification types
- Include push notification fallback
```

### Email Notification System

```
Add email notification functionality:

Requirements:
- Create email templates
- Implement email scheduling
- Add notification preferences
- Include email tracking
- Support multiple email types
- Use existing user management

Components needed:
- EmailTemplate component
- NotificationPreferences component
- EmailScheduler component
- EmailTracking component
- EmailTypes configuration

The email system should:
- Support multiple email templates
- Allow scheduling and queuing
- Track email delivery
- Respect user preferences
- Include unsubscribe functionality
```

## 📈 Analytics and Reporting

### User Analytics

```
Implement user analytics and reporting:

Requirements:
- Track user interactions and behavior
- Create analytics dashboard
- Add data visualization
- Implement privacy-compliant tracking
- Include export functionality
- Use existing database patterns

Components needed:
- AnalyticsDashboard component
- DataVisualization components
- ReportGenerator component
- PrivacySettings component
- ExportFunctionality component

The analytics system should:
- Track user interactions
- Provide data visualization
- Respect privacy settings
- Support data export
- Include performance metrics
```

### Performance Monitoring

```
Add performance monitoring and optimization:

Requirements:
- Monitor application performance
- Track Core Web Vitals
- Implement error tracking
- Add performance alerts
- Include optimization suggestions
- Use existing monitoring patterns

Components needed:
- PerformanceDashboard component
- ErrorTracking component
- PerformanceAlerts component
- OptimizationSuggestions component
- MonitoringConfiguration component

The monitoring system should:
- Track performance metrics
- Monitor Core Web Vitals
- Alert on performance issues
- Provide optimization suggestions
- Include error tracking
```

## 🔧 System Features

### API Rate Limiting

```
Implement API rate limiting and throttling:

Requirements:
- Add rate limiting middleware
- Create rate limit configuration
- Implement different limit tiers
- Add rate limit monitoring
- Include bypass mechanisms
- Use existing middleware patterns

Components needed:
- RateLimitMiddleware
- RateLimitConfiguration
- RateLimitMonitoring
- BypassMechanisms
- RateLimitDashboard

The rate limiting should:
- Support different limit tiers
- Provide monitoring and alerts
- Include bypass mechanisms
- Respect user authentication
- Support configuration updates
```

### Caching System

```
Enhance the caching system with advanced features:

Requirements:
- Implement cache invalidation strategies
- Add cache warming functionality
- Create cache monitoring
- Include cache analytics
- Add cache optimization
- Use existing Redis patterns

Components needed:
- CacheInvalidation component
- CacheWarming component
- CacheMonitoring component
- CacheAnalytics component
- CacheOptimization component

The enhanced caching should:
- Support smart invalidation
- Include cache warming
- Provide monitoring and analytics
- Optimize cache performance
- Support different cache strategies
```
