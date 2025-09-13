#!/usr/bin/env python3
"""
Script to automatically generate _data/hikes.yml from folders in images/hikes/
Usage: python3 scripts/generate_hikes.py
"""

import os
import yaml
from pathlib import Path

def parse_description_file(description_path):
    """Parse description.txt file and return data as dictionary"""
    data = {}
    if description_path.exists():
        with open(description_path, 'r') as f:
            for line in f:
                line = line.strip()
                if ':' in line:
                    key, value = line.split(':', 1)
                    data[key.strip()] = value.strip()
    return data

def get_image_files(hike_folder):
    """Get list of image files in hike folder"""
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    image_files = []
    
    for file_path in hike_folder.iterdir():
        if file_path.is_file() and file_path.suffix.lower() in image_extensions:
            image_files.append(file_path.name)
    
    return sorted(image_files)

def generate_hikes_yaml():
    """Generate hikes.yml from folder structure"""
    hikes_dir = Path('images/hikes')
    output_file = Path('_data/hikes.yml')
    
    if not hikes_dir.exists():
        print(f"Error: {hikes_dir} directory not found!")
        return
    
    hikes_data = {}
    
    # Process each hike folder
    for hike_folder in sorted(hikes_dir.iterdir()):
        if hike_folder.is_dir():
            hike_id = hike_folder.name
            description_file = hike_folder / 'description.txt'
            
            # Parse description file
            hike_info = parse_description_file(description_file)
            
            # Get image files
            photos = get_image_files(hike_folder)
            
            # Set defaults if description file is missing or incomplete
            hike_data = {
                'title': hike_info.get('title', hike_id.replace('_', ' ').title()),
                'location': hike_info.get('location', 'Unknown Location'),
                'date': hike_info.get('date', '2024-01-01'),
                'elevation': hike_info.get('elevation', 'Unknown'),
                'distance': hike_info.get('distance', 'Unknown'),
                'difficulty': hike_info.get('difficulty', 'Unknown'),
                'description': hike_info.get('description', f'Photos from {hike_id} hike.'),
                'photos': photos
            }
            
            hikes_data[hike_id] = hike_data
            print(f"Processed {hike_id}: {len(photos)} photos")
    
    # Write YAML file
    with open(output_file, 'w') as f:
        yaml.dump(hikes_data, f, default_flow_style=False, sort_keys=False)
    
    print(f"\nGenerated {output_file} with {len(hikes_data)} hikes")
    print("Remember to restart your Jekyll server to see changes!")

if __name__ == '__main__':
    generate_hikes_yaml()