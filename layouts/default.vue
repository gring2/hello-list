<template>
        <div>
            <header>
                <div class="header-item home"></div>
                <div class="header-item search">
                    <div>
                        <input placeholder="Search"  v-on:drop.stop.prevent/>

                    </div>
                </div>
                <div class="header-item pannel">
                    <ul>
                        <li>
                            <a>
                                Personal
                            </a>

                        </li>
                        <li>
                            <a>
                                Group
                            </a>

                        </li>
                        <li>
                            <a>
                                List
                            </a>

                        </li>

                    </ul>
                </div>
            </header>
            <nuxt/>
        </div>
 </template>
