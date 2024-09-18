/**
 * @module config setting for local yaml files 
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const CONFIG_PATH = path.join(process.cwd(), 'config', 'config.yaml');

interface Config {
  [key: string]: any;
}

// Helper function to read the config file
function readConfig(): Config {
  const fileContents = fs.readFileSync(CONFIG_PATH, 'utf8');
  return yaml.load(fileContents) as Config;
}

// Helper function to write the config file
function writeConfig(config: Config): void {
  const updatedYaml = yaml.dump(config);
  fs.writeFileSync(CONFIG_PATH, updatedYaml, 'utf8');
}

// Create: Add a new key-value pair to the config
export function createConfigItem(key: string, value: any): void {
  const config = readConfig();
  if (key in config) {
    throw new Error(`Key "${key}" already exists in the config`);
  }
  config[key] = value;
  writeConfig(config);
}

// Read: Get a value from the config by key
export function readConfigItem(key: string): any {
  const config = readConfig();
  if (!(key in config)) {
    throw new Error(`Key "${key}" does not exist in the config`);
  }
  return config[key];
}

// Update: Modify an existing key-value pair in the config
export function updateConfigItem(key: string, value: any): void {
  const config = readConfig();
  if (!(key in config)) {
    throw new Error(`Key "${key}" does not exist in the config`);
  }
  config[key] = value;
  writeConfig(config);
}

// Delete: Remove a key-value pair from the config
export function deleteConfigItem(key: string): void {
  const config = readConfig();
  if (!(key in config)) {
    throw new Error(`Key "${key}" does not exist in the config`);
  }
  delete config[key];
  writeConfig(config);
}

// Read all: Get the entire config
export function readEntireConfig(): Config {
  return readConfig();
}

// Update nested: Update a nested key in the config
export function updateNestedConfigItem(keys: string[], value: any): void {
  const config = readConfig();
  let current: any = config;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) {
      throw new Error(`Key "${keys[i]}" does not exist in the config`);
    }
    current = current[keys[i]];
  }
  const lastKey = keys[keys.length - 1];
  if (!(lastKey in current)) {
    throw new Error(`Key "${lastKey}" does not exist in the config`);
  }
  current[lastKey] = value;
  writeConfig(config);
}

// Usage example
try {
  // Create
  createConfigItem('newSection', { key: 'value' });

  // Read
  const item = readConfigItem('newSection');
  console.log(item);

  // Update
  updateConfigItem('newSection', { updatedKey: 'updatedValue' });

  // Delete
  deleteConfigItem('newSection');

  // Read all
  const entireConfig = readEntireConfig();
  console.log(entireConfig);

  // Update nested
  updateNestedConfigItem(['body', 'title'], 'New Homepage Title');
} catch (error) {
  console.error('Error:', error.message);
}
