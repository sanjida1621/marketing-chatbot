<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class RoleAndUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Roles
        $managerRole = Role::firstOrCreate(['name' => 'manager']);

        // Create Manager User
        $manager = User::firstOrCreate(
            ['email' => 'manager@example.com'],
            [
                'name' => 'Manager User',
                'password' => Hash::make('password123'),
            ]
        );

        $manager->assignRole($managerRole);

        // Create General User
        User::firstOrCreate(
            ['email' => 'user@example.com'],
            [
                'name' => 'General User',
                'password' => Hash::make('password123'),
            ]
        );

    }
}
