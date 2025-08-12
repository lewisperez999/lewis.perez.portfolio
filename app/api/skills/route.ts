import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import type { Skill } from '@prisma/client'

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    })

    // Group skills by category
    const skillsByCategory = skills.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, Skill[]>)

    return NextResponse.json(skillsByCategory)
  } catch (error) {
    console.error('Error fetching skills:', error)
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { category, name, icon } = body

    const skill = await prisma.skill.create({
      data: {
        category,
        name,
        icon
      }
    })

    return NextResponse.json(skill)
  } catch (error) {
    console.error('Error creating skill:', error)
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 500 })
  }
}
