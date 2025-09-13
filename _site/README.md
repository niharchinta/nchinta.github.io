# Personal Portfolio Website

A Jekyll-based personal portfolio website featuring a clean, modern design with project showcases and interactive elements.

## Features

- 🎨 **Modern Design**: Clean, responsive layout using Bulma CSS framework
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🔗 **Social Integration**: Links to GitHub, LinkedIn, and other profiles
- 📄 **CV Integration**: Built-in CV/resume page
- 🖼️ **Project Gallery**: Tabbed interface for projects and photo galleries
- ⚡ **Interactive Elements**: Hover effects, modals, and smooth transitions
- 🚀 **GitHub Pages Ready**: Automatic deployment to custom domain

## 🛠️ Development Setup

### Prerequisites

- **macOS**: This guide is for macOS users
- **Homebrew**: Package manager for macOS
- **Git**: For version control

### Step 1: Install Dependencies

#### Install Homebrew (if not already installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install Ruby via Homebrew
```bash
# Install Ruby (avoid using system Ruby)
brew install ruby

# Add Homebrew Ruby to your PATH
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Verify Ruby Installation
```bash
which ruby  # Should show /opt/homebrew/opt/ruby/bin/ruby
ruby --version  # Should show Ruby 3.4.x
```

### Step 2: Install Jekyll and Dependencies

```bash
# Install Bundler and Jekyll
gem install bundler jekyll

# Clone the repository (replace with your repo URL)
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo

# Install project dependencies
bundle install
```

### Step 3: Run Development Server

#### Option 1: Full Jekyll Server (Recommended)
```bash
# Start Jekyll development server
bundle exec jekyll serve

# Or with custom host/port
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

**Access your site at: `http://localhost:4000`**

#### Option 2: Simple HTTP Server (Quick Preview)
```bash
# For quick static file preview (no Jekyll processing)
python3 -m http.server 8000

# Access at: http://localhost:8000
```

### Step 4: Development Workflow

1. **Make Changes**: Edit files in the repository
2. **Auto-Reload**: Jekyll automatically rebuilds and refreshes (except `_config.yml`)
3. **Restart**: If you change `_config.yml`, restart Jekyll server
4. **Stop Server**: Press `Ctrl+C` in terminal

## 🔧 Configuration

### Personal Information
Update these files with your information:
- `_config.yml` - Site title, description, contact info, social links
- `_data/employment.yml` - Work experience
- `_data/education.yml` - Educational background
- `_data/authors.yml` - Author information for publications

### Customization
- **Images**: Add your photos to `images/` directory
- **Projects**: Update project cards in `index.html`
- **Hikes**: Add new hike folders to `images/hikes/` (see Hike Management section)
- **Styling**: Modify `css/index.scss` for custom styles
- **Scripts**: Update `js/index.js` for custom interactions

## 📁 Project Structure

```
├── _config.yml           # Site configuration
├── _data/                # Data files (YAML)
│   ├── authors.yml
│   ├── education.yml
│   ├── employment.yml
│   ├── hikes.yml         # Hike data (auto-generated)
│   └── ...
├── _sass/                # Sass stylesheets
├── css/                  # Compiled CSS and Sass files
├── images/               # Images and media files
│   └── hikes/            # Hike photo directories
│       ├── hike1/        # Individual hike folder
│       │   ├── description.txt
│       │   ├── photo1.jpg
│       │   └── photo2.jpg
│       └── hike2/
├── js/                   # JavaScript files
├── scripts/              # Utility scripts
│   └── generate_hikes.py # Auto-generate hikes.yml
├── index.html            # Main homepage
├── cv.html               # CV/Resume page
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## 🥾 Hike Management

The website features a dynamic hike photo gallery that automatically loads from folder structure.

### Adding New Hikes

1. **Create Hike Folder**:
   ```bash
   mkdir images/hikes/your_hike_name
   ```

2. **Add Photos**:
   ```bash
   # Copy your hike photos to the folder
   cp path/to/your/photos/* images/hikes/your_hike_name/
   ```

3. **Create Description File**:
   ```bash
   # Create description.txt with hike details
   cat > images/hikes/your_hike_name/description.txt << EOF
   title: Amazing Mountain Adventure
   location: Yosemite National Park
   date: 2024-10-15
   elevation: 3,200 ft
   distance: 12.5 miles
   difficulty: Hard
   description: Challenging but rewarding hike with stunning views of the valley and waterfalls. Early start recommended for best lighting.
   EOF
   ```

4. **Update Data File**:
   ```bash
   # Option 1: Use the auto-generation script
   python3 scripts/generate_hikes.py
   
   # Option 2: Manually update _data/hikes.yml
   # Add your hike following the existing format
   ```

5. **Restart Jekyll**:
   ```bash
   # Stop current server (Ctrl+C) and restart
   bundle exec jekyll serve
   ```

### Description File Format

Each hike folder should contain a `description.txt` file with the following format:

```
title: Your Hike Title
location: Location/Park Name
date: YYYY-MM-DD
elevation: X,XXX ft
distance: X.X miles
difficulty: Easy/Moderate/Hard
description: Detailed description of your hike experience, trail conditions, highlights, and any tips for future hikers.
```

### Supported Image Formats

- **JPEG/JPG** (recommended)
- **PNG**
- **WebP**
- **GIF**

### Auto-Generation Script

Use the included Python script to automatically generate `_data/hikes.yml`:

```bash
# Install PyYAML if not installed
pip3 install PyYAML

# Run the script
python3 scripts/generate_hikes.py
```

The script will:
- Scan all folders in `images/hikes/`
- Read `description.txt` files
- Find all image files
- Generate `_data/hikes.yml` automatically

### Manual Data File Format

If you prefer to manually edit `_data/hikes.yml`:

```yaml
your_hike_folder_name:
  title: "Hike Title"
  location: "Location"
  date: "2024-01-01"
  elevation: "X,XXX ft"
  distance: "X.X miles"
  difficulty: "Moderate"
  description: "Your hike description..."
  photos:
    - "photo1.jpg"
    - "photo2.jpg"
```

## 🚀 Deployment

### GitHub Pages
1. Push changes to your repository
2. Enable GitHub Pages in repository settings
3. Set custom domain in repository settings (optional)
4. Your site will be available at `https://yourusername.github.io` or your custom domain

### Custom Domain Setup
1. Add `CNAME` file with your domain name
2. Configure DNS A records to point to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

## 🐛 Troubleshooting

### Jekyll Won't Start
```bash
# If you get "csv" or other gem errors
gem install csv base64 bigdecimal

# Update bundle
bundle update

# Clear cache and regenerate
bundle exec jekyll clean
bundle exec jekyll serve
```

### Permission Errors
```bash
# Don't use sudo with gem install
# Use Homebrew Ruby instead of system Ruby
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

### Port Already in Use
```bash
# Kill process using port 4000
lsof -ti:4000 | xargs kill -9

# Or use different port
bundle exec jekyll serve --port 4001
```

## 📝 License

Feel free to borrow this template for your own use.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

