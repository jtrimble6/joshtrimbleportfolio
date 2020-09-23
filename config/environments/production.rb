config.action_mailer.default_url_options = { :host => ‘joshuatrimble.com’ }
Rails.application.routes.default_url_options[:host] = ‘joshuatrimble.com’
config.action_mailer.delivery_method = :smtp
config.action_mailer.perform_deliveries = true
config.action_mailer.raise_delivery_errors = false
config.action_mailer.default :charset => “utf-8”
config.action_mailer.smtp_settings = {
address: “smtp.gmail.com”,
port: 587,
domain: ENV[“GMAIL_DOMAIN”],
authentication: “plain”,
enable_starttls_auto: true,
user_name: ENV[“GMAIL_USERNAME”],
password: ENV[“GMAIL_PASSWORD”]
}